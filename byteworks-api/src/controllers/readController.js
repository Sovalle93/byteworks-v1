import { readUser } from "../models/readUserModel.js";

const readFilteredUsers = async (req, res) => {
    try {
        const { role, skill, status } = req.query;

        const filters = { role, skill, status };
        console.log("Received filters:", filters);

        const users = await readUser(filters);

        if (users.length > 0) {
        console.log("Users read successfully with filters!");
        res.status(200).json({ message: "Users read successfully!", users });
        } else {
        console.error("No users found based on filters.");
        res.status(404).json({ message: "No users found matching the filters." });
        }
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ message: error.message });
    }
};

export { readFilteredUsers };
