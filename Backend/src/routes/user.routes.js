import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/get-user", userController.getCurrentUser);

export default userRouter;
