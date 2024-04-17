import pool from "../../config/database/connectionDB.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createBusiness = async (firstname, email, password, role, service) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const insertBusinessQuery = `INSERT INTO business (firstname, email, password, role, service) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const result = await pool.query(insertBusinessQuery, [
      firstname,
      email,
      hashedPassword,
      role,
      service
    ]);

    const newBusiness = result.rows[0];
    const payload = {
      userId: newBusiness.id,
      email: newBusiness.email,
    };
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret, { expiresIn: "1h" });

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

export { createBusiness };
