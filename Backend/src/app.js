import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRouter);

export default app;
