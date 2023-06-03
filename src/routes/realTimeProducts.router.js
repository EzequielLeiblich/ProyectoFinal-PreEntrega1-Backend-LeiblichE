import { Router } from "express";
import ManagerProducts from '../classes/ProductsManager.class.js';
const router = Router();

const ProductsManager = new ManagerProducts();

router.get('/', (req, res) => {


    res.render('realTimeProducts')
})

export default router;