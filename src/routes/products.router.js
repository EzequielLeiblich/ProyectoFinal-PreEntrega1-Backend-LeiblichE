import { Router } from "express";
import ManagerProducts from "../classes/ProductsManager.class.js";

const router = Router();

const managerProducts = new ManagerProducts()

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const product = await managerProducts.consultarProductoPorId(id);
    res.send({ product });
});

router.get("/", async (req, res) => {
    const limit = req.query.limit || 100;
    const products = await managerProducts.consultarProductos(limit);
    res.send({ products });
});

router.post("/", async (req, res) => {
    console.log(req.body);
    const product = req.body;

    managerProducts.crearProducto(product);
    res.send({ status: "Producto Creado" });
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const result = await managerProducts.eliminarProductoPorId(id);
    res.send(result);
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const updatedFields = req.body;
    
    const result = await managerProducts.actualizarProductoPorId(id, updatedFields);
    res.send(result);
});

export default router;
