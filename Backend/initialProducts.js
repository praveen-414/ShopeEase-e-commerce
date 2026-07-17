import dotenv from "dotenv";
import axios from "axios";
import connectDB from "./src/config/db.js";
import productModel from "./src/models/products.model.js";

dotenv.config();

const initialProducts = async () => {
  try {
    await connectDB();
    const [dummyRes, fakeStoreRes] = await Promise.all([
      axios.get("https://dummyjson.com/products?limit=194"),
      axios.get("https://fakestoreapi.com/products"),
    ]);

    const dummyProducts = dummyRes.data.products.map((product) => ({
      productImage: product.thumbnail,
      title: product.title,
      description: product.description,
      price: product.price,
    }));

    const fakeStoreProducts = fakeStoreRes.data.map((product) => ({
      productImage: product.image,
      title: product.title,
      description: product.description,
      price: product.price,
    }));

    const allProducts = [...dummyProducts, ...fakeStoreProducts];

    await productModel.insertMany(allProducts);
    console.log("Products inserted successfully");

    console.log(`Inserted ${allProducts.length} products successfully.`);
    process.exit();
  } catch (error) {
    console.error(error.message);
  }
};
initialProducts();