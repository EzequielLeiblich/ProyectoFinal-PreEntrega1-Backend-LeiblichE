import fs from "fs";
import { v4 as uuidV4 } from 'uuid'

const path = "src/classes/files/products.json"

export default class ManagerProducts {
    constructor(products = []) {
        this.products = products;
        this.path = 'src/classes/files/products.json';
        }
    
    checkFile() {
        if (fs.existsSync(this.path)) {
            const fileContent = fs.readFileSync(this.path, 'utf-8');
            this.products = JSON.parse(fileContent);
        }
        else {
            fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2), 'utf-8');

        }
    } 


    consultarProductos = async (limit) => {
        this.checkFile();
        console.log("Producto existente", fs.existsSync(path));
        if (fs.existsSync(path)) {
            const data = await fs.promises.readFile(path, "utf-8");
            const  products = JSON.parse(data);
            if (limit) {
                return products.slice(0, limit);
            } else {
                return products;
            }
        } else {
            return [];
        }
    };

    getProductsInStock = async () => {
        const products = await this.consultarProductos();
        const inStock = [];
        inStock.push(...products.filter(product => product.stock > 0));
        return inStock;
    }

    crearProducto = async (info) => {
        this.checkFile();
        const productos = await this.consultarProductos();
        const productoExistente = productos.find((producto) => producto.code === info.code);
        if (productoExistente) {
            return { status: "error", message: "El producto con ese código ya existe" };
        }
        info.id = uuidV4();
        productos.push(info);
        await fs.promises.writeFile(path, JSON.stringify(productos, null, "\t"));
        return { status: "success", message: "Producto creado correctamente" };
    };

    consultarProductoPorId = async (id) => {
        this.checkFile();
        const productos = await this.consultarProductos();

        const producto = productos.find((producto) => {
            return producto.id == id;
        });

        return producto ? producto : "Id de producto no encontrado";
    };
    
    eliminarProductoPorId = async (id) => {
        this.checkFile();
        const productos = await this.consultarProductos();
        const index = productos.findIndex((producto) => producto.id === id);
    
        if (index !== -1) {
            productos.splice(index, 1);
            await fs.promises.writeFile(path, JSON.stringify(productos, null, "\t"));
            return { status: "Producto eliminado correctamente" };
        } else {
            return { status: "No se encontró el producto con el ID proporcionado" };
        }
    };

    actualizarProductoPorId = async (id, updatedFields) => {
        this.checkFile();
        const productos = await this.consultarProductos();
        const index = productos.findIndex((producto) => producto.id === id);
        
        if (index !== -1) {
            const producto = productos[index];
            Object.assign(producto, updatedFields);
            await fs.promises.writeFile(path, JSON.stringify(productos, null, "\t"));
            return { status: "Producto actualizado correctamente" };
        } else {
            return { status: "No se encontró el producto con el ID proporcionado" };
        }
    };
}
