import pool from "../../config/database/connectionDB.js";

const readUser = async (filters = {}) => {
  try {
    const selectClause = "SELECT id, firstname, role, skill, status";
    const { role, skill, status } = filters;

    let whereClause = "";
    const filterValues = [];

    const conditions = [];
    if (role) {
      conditions.push(`role LIKE $${filterValues.length + 1}`);
      filterValues.push(role);
    }
    if (skill) {
      conditions.push(`skill LIKE $${filterValues.length + 1}`);
      filterValues.push(skill);
    }
    if (status) {
      conditions.push(`status LIKE $${filterValues.length + 1}`);
      filterValues.push(status);
    }

    if (conditions.length > 0) {
      whereClause = " WHERE " + conditions.join(" AND ");
    }

    const query = `${selectClause} FROM users ${whereClause}`;

    const result = await pool.query(query, filterValues);

    return result.rows;
  } catch (error) {
    console.error("Error reading users:", error);
    return { error: "An error occurred while reading users." };
  }
};

export { readUser };
