import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import productsRouter from "./routes/products.routes.js";
import cors from "cors";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";
connectDB();

const app = express();
app.use(
  cors({
    origin: "https://shopeease-e-commerce.onrender.com",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

export default app;
