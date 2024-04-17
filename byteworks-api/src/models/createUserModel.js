import pool from "../../config/database/connectionDB.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createUser = async (firstname, email, password, role, skill, status) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const insertUserQuery = `INSERT INTO users (firstname, email, password, role, skill, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const result = await pool.query(insertUserQuery, [
      firstname,
      email,
      hashedPassword,
      role,
      skill,
      status,
    ]);

    const newUser = result.rows[0];
    const payload = {
      userId: newUser.id,
      email: newUser.email,
    };
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret, { expiresIn: "5h" });

    console.log("Generated JWT:", token);

    return { success: true, token };
  } catch (error) {
    console.error(error);
    let errorMessage = "An error occurred during registration.";
    if (error.code && error.code === "23505") {
      errorMessage = "Email already exists.";
    }
    return { success: false, error: errorMessage };
  }
};

export { createUser };
