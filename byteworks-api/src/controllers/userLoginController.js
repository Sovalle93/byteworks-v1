import { validateLoginModel } from "../models/validateLoginModel.js";
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }
    const { success, userType, user } = await validateLoginModel({ email, password });
    console.log("Retrieved user:", user);
    if (!success) {
      console.log("Invalid user:", user);
      return res.status(401).json({ error: "Invalid user" });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: `Welcome, ${email}! You have successfully logged in!.`,
      userType,
      token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

export { loginUser };



