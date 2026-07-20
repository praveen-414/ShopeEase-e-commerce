import orderModel from "../models/order.model.js";
import cartModel from "../models/cart.model.js";

const placeOrder = async (req, res) => {
  try {
    const userId = req.userId;

    const {
      fullName,
      phone,
      email,
      streetAddress,
      city,
      state,
      pincode,
      country,
      paymentMethod,
    } = req.body;

    // Validation
    if (
      !fullName ||
      !phone ||
      !streetAddress ||
      !city ||
      !state ||
      !pincode ||
      !country ||
      !paymentMethod
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find user's cart
    const cart = await cartModel
      .findOne({ user: userId })
      .populate("items.product");
    console.log("User ID:", userId);
    console.log("Cart:", JSON.stringify(cart, null, 2));

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    // Calculate total
    const totalAmount = cart.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);

    // Create order
    const order = await orderModel.create({
      user: userId,

      items: cart.items.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.price,
      })),

      shippingAddress: {
        fullName,
        phone,
        email,
        streetAddress,
        city,
        state,
        pincode,
        country,
      },

      paymentMethod,
      totalAmount,
    });

    // Clear cart
    cart.items = [];
    await cart.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const userId = req.userId;
    const orders = await orderModel
      .find({ user: userId })
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { getMyOrders };

export default { placeOrder,getMyOrders };
