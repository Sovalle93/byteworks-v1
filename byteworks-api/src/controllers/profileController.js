import { viewProfile } from "../models/viewProfileModel.js";

const viewProfileController = async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({ success: false, error: 'Email parameter is required' });
        }

        const { success, user, userType, tableName, error } = await viewProfile(email); 
        if (success) {
            res.status(200).json({ success: true, user, userType, tableName });
        } else {
            res.status(404).json({ success: false, error });
        }
    } catch (error) {
        console.error('Error in viewProfile controller:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

export { viewProfileController };


