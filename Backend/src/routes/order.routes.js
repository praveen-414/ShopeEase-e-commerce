import { Router } from "express";
import isAuth from "../middlewares/isAuth.js"
import orderController from "../controllers/order.controller.js";


const orderRouter = Router();

orderRouter.post("/place",isAuth,orderController.placeOrder);
orderRouter.get("/my-orders", isAuth, orderController.getMyOrders);

export default orderRouter;
