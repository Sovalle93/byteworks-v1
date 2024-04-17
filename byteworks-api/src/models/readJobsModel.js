import pool from "../../config/database/connectionDB.js";

const readJob = async (filters = {}) => {
  try {
    const selectClause = "SELECT id, business, role, skill, service";
    const { role, skill, service } = filters;

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
    if (service) {
      conditions.push(`service LIKE $${filterValues.length + 1}`);
      filterValues.push(service);
    }

    if (conditions.length > 0) {
      whereClause = " WHERE " + conditions.join(" AND ");
    }

    const query = `${selectClause} FROM jobs ${whereClause}`;

    const result = await pool.query(query, filterValues);

    return result.rows;
  } catch (error) {
    console.error("Error reading users:", error);
    return { error: "An error occurred while reading users." };
  }
};

export { readJob };
