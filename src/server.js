import express from 'express'
import routerProducts from './routes/products.router.js';
import routerCart from './routes/cart.router.js';
import routerRealTimeProducts from './routes/realTimeProducts.router.js';
import viewsRouter from "./routes/views.router.js";
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import ManagerProducts from './classes/ProductsManager.class.js';
import { Server } from "socket.io";
export const pM = new ManagerProducts(__dirname + "/classes/files/products.json");

const app = express();
const ProductsManager = new ManagerProducts();

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/products/', routerProducts)
app.use('/carts/', routerCart)
app.use('/', viewsRouter);

const products =  ProductsManager.consultarProductos();
app.get('/', (req, res) => {
    res.render('index', {products})
})

const expressServer = app.listen(8080, ()=>{
    console.log('Servidor funcionando en puerto 8080')
});
const socketServer = new Server(expressServer);


socketServer.on("connection", socket => {
    socketServer.emit('initProduct', products);
    socket.on("message", data => {
        console.log(data);
    });
});

app.use(function (req, res, next) {
    req.socketServer = socketServer;
    next();
})


app.use('/realtimeproducts/', routerRealTimeProducts)
export default socketServer;