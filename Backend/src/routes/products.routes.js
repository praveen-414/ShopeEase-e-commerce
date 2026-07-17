import { Router } from "express";
import productsController from "../controllers/products.controller.js";


const productsRouter = Router();

productsRouter.get("/products",productsController.getAllProducts);
productsRouter.get("/product/:id", productsController.getSingleProduct);

export default productsRouter;