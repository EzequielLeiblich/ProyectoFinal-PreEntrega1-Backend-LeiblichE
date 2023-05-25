import { Router } from "express";
import ManagerCarts from "../classes/CartManager.class.js";

const router = Router();
const managerCarts = new ManagerCarts();

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const cart = await managerCarts.consultarCartPorId(id);
    res.send(cart);
    });

    router.get("/", async (req, res) => {
    const carts = await managerCarts.consultarCarts();
    res.send(carts);
    });

    router.post("/", async (req, res) => {
    await managerCarts.crearCart();
    res.send({ status: "Carrito nuevo creado" });
    });

    router.post("/:cid/products/:pid", async (req, res) => {
    const cartId = req.params.cid;
    const productId = req.params.pid;

    await managerCarts.agregarProductoEnCarrito(cartId, productId);
    res.send({ status: "Se agrego el producto al carrito" });
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await managerCarts.eliminarCart(id);
    res.send({ status: "Carrito eliminado" });
});

export default router;
