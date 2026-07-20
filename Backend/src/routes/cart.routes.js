import { Router } from "express";
import cartController from "../controllers/cart.controller.js";
import isAuth from "../middlewares/isAuth.js"


const cartRouter = Router();

cartRouter.post("/add",isAuth, cartController.addToCart)
cartRouter.delete("/remove/:productId",isAuth, cartController.removeFromCart)
cartRouter.get("/get-cart",isAuth, cartController.getCartProducts)


export default cartRouter;
