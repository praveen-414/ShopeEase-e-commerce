import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();

const port = Number(process.env.PORT || 5000);

app.listen(port, () => {
  console.log("Server started successfully...");
});
