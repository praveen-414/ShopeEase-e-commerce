import dotenv from "dotenv";
import axios from "axios";
import connectDB from "./src/config/db.js";
import productModel from "./src/models/products.model.js";

dotenv.config();

const initialProducts = async () => {
  try {
    await connectDB();
    const res = await axios.get("https://dummyjson.com/products?limit=194");

    const dummyProducts = res.data.products.map((product) => ({
      productImage: product.thumbnail,
      title: product.title,
      rating: product.rating,
      description: product.description,
      price: product.price,
      stock: product.stock,
      discountPercentage: product.discountPercentage,
      tags:product.tags,
      warrantyInformation:product.warrantyInformation,
      shippingInformation:product.shippingInformation,
      availabilityStatus:product.availabilityStatus,
      returnPolicy:product.returnPolicy,
      category:product.category,
    }));

    const allProducts = dummyProducts;

    await productModel.insertMany(allProducts);
    console.log("Products inserted successfully");

    console.log(`Inserted ${allProducts.length} products successfully.`);
    process.exit();
  } catch (error) {
    console.error(error.message);
  }
};
initialProducts();
