import cartModel from "../models/cart.model.js";

const addToCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, quantity } = req.body;

    let cart = await cartModel.findOne({ user: userId });

    // Create cart if it doesn't exist
    if (!cart) {
      cart = await cartModel.create({
        user: userId,
        items: [
          {
            product: productId,
            quantity,
          },
        ],
      });

      return res.status(201).json({
        success: true,
        message: "Product added to cart",
        cart,
      });
    }

    // Check if product already exists
    const existingProduct = cart.items.find(
      (item) => item.product.toString() === productId,
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.items.push({
        product: productId,
        quantity,
      });
    }

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.params;
    const cart = await cartModel.findOne({ user: userId });
    if (!cart) {
      return res.status(401).json({
        success: false,
        message: "Cart not found...",
      });
    }
    cart.items = cart.items.filter((item) => {
      return item.product.toString() !== productId;
    });

    await cart.save();
    res.status(200).json({
      success: true,
      message: "Product removed",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCartProducts = async (req, res) => {
  try {
    const userId = req.userId;

    const cart = await cartModel
      .findOne({ user: userId })
      .populate("items.product");

    if (!cart) {
      return res.status(200).json({
        success: true,
        message: "Cart is empty",
        cart: { items: [] },
      });
    }

    res.status(200).json({
      success: true,
      message: "Fetched cart successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export default { addToCart, removeFromCart, getCartProducts };
