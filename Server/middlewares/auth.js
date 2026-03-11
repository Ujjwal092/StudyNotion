const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

//auth
exports.auth = async (req, res, next) => {
  try {
    let token =
      req.cookies?.token ||
      req.body?.token ||
      req.headers?.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token missing",
      });
    }

    // remove all quotes
    token = token.replace(/['"]+/g, "").trim();

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("AUTH ERROR:", error);

    return res.status(401).json({
      success: false,
      message: "Token invalid",
    });
  }
};
// ROLE MIDDLEWARE

exports.isStudent = (req, res, next) => {
  try {
    if (req.user?.accountType !== "Student") {
      return res.status(403).json({
        success: false,
        message: "Access denied: Students only",
      });
    }

    next();
  } catch (error) {
    console.error("Student Middleware Error:", error);

    return res.status(500).json({
      success: false,
      message: "User role verification failed",
    });
  }
};

exports.isInstructor = (req, res, next) => {
  try {
    if (req.user?.accountType !== "Instructor") {
      return res.status(403).json({
        success: false,
        message: "Access denied: Instructors only",
      });
    }

    next();
  } catch (error) {
    console.error("Instructor Middleware Error:", error);

    return res.status(500).json({
      success: false,
      message: "User role verification failed",
    });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.user?.accountType !== "Admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied: Admins only",
      });
    }

    next();
  } catch (error) {
    console.error("Admin Middleware Error:", error);

    return res.status(500).json({
      success: false,
      message: "User role verification failed",
    });
  }
};
