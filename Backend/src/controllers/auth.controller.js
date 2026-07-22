import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  // validation
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required...!",
    });
  }
  try {
    // checking if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists!",
      });
    }
    // hashing password
    const hashPassword = await bcryptjs.hash(password, 10);
    // created user
    const user = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
    // tokens creating
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.JWT_ACCESSTOKEN_KEY,
      {
        expiresIn: "15m",
      },
    );
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.JWT_REFRESHTOKEN_KEY,
      {
        expiresIn: "7d",
      },
    );
    // saving refreshToken to DB
    user.refreshToken = refreshToken;
    await user.save();

    const userData = user.toObject();
    delete userData.password;
    delete userData.refreshToken;

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "Registered successfully...",
      user: userData,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required...!",
    });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found, please register...",
      });
    }
    const isPasswordMatch = await bcryptjs.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.JWT_ACCESSTOKEN_KEY,
    );
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.JWT_REFRESHTOKEN_KEY,
    );
    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite:"None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const userData = user.toObject();
    delete userData.password;
    delete userData.refreshToken;

    res.status(200).json({
      message: "logged in successfully...",
      user: userData,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const logout = async (req, res) => {
  const { refreshToken } = req.cookies;
  try {
    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: "Refresh token not found...",
      });
    }
    const user = await userModel.findOne({ refreshToken });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Refresh token not found...",
      });
    }
    user.refreshToken = null;
    await user.save();
    res.clearCookie("refreshToken");
    res.status(200).json({
      message: "User logged out successfully...",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getRefreshTokens = async (req, res) => {
  const { refreshToken } = req.cookies;
  try {
    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: "Refresh token not found...",
      });
    }
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESHTOKEN_KEY);
    const accessToken = jwt.sign(
      { id: decoded.id },
      process.env.JWT_ACCESSTOKEN_KEY,
      {
        expiresIn: "15m",
      },
    );

    res.status(200).json({
      message: "Access token refresh successfully...",
      accessToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default { register, login, logout, getRefreshTokens };
