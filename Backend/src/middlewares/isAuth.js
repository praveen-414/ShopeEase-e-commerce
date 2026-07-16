import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const isAuth = async (req, res, next) => {
  const { refreshToken } = req.cookies;

  try {
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user...",
      });
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESHTOKEN_KEY);
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default isAuth;
