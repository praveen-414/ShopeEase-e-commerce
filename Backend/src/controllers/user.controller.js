import userModel from "../models/user.model.js";

const getCurrentUser = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await userModel
      .findById(userId)
      .select("-password -refreshToken");
    console.log(user);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found...",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default { getCurrentUser };
