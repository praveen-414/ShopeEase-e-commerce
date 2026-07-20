import { Router } from "express";
import userController from "../controllers/user.controller.js";
import isAuth from "../middlewares/isAuth.js"

const userRouter = Router();

userRouter.get("/get-user",isAuth, userController.getCurrentUser);

export default userRouter;
