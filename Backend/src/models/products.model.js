import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const productModel = mongoose.model("products", productSchema);

export default productModel;
