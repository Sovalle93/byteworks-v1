import pool from "../../config/database/connectionDB.js";

const viewProfile = async (email) => {
    try {
        if (!email) {
            throw new Error('Email parameter is required');
        }

        let user = null;
        let userType = null;
        let tableName = null;

        console.log('Searching for user with email:', email);
        user = await getUserByEmail(email, 'users');
        if (user) {
            userType = 'user';
            tableName = 'users';
        } else {
            console.log('User not found in the "users" table, searching in the "business" table');
            user = await getUserByEmail(email, 'business');
            if (user) {
                userType = 'business';
                tableName = 'business';
            }
        }

        if (!user) {
            console.log('User not found for email:', email);
            return { success: false, error: 'User not found' };
        }

        console.log(`User found in the "${userType}" table:`, user);
        return { success: true, user, userType, tableName };
    } catch (error) {
        console.error("Error in viewProfile model:", error);
        throw error;
    }
};


const getUserByEmail = async (email, tableName) => {
    let query;
    let columns;
    if (tableName === 'users') {
        columns = 'id, firstname, email, role, skill, status';
    } else if (tableName === 'business') {
        columns = 'id, firstname, email, role, service';
    } else {
        throw new Error('Invalid table name');
    }
    query = `
        SELECT ${columns}
        FROM ${tableName}
        WHERE email = $1
    `;
    try {
        const { rows } = await pool.query(query, [email]);
        return rows[0];
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
};

export { viewProfile };
