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
    rating: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
    },
    discountPercentage: {
      type: Number,
    },
    tags: {
      type: [String],
      default: [],
    },
    warrantyInformation: {
      type: String,
    },
    shippingInformation: {
      type: String,
    },
    availabilityStatus: {
      type: String,
    },
    returnPolicy: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true },
);

const productModel = mongoose.model("products", productSchema);

export default productModel;
