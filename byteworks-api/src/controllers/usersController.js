import { createUser } from "../models/createUserModel.js";

const createNewUser = async (req, res) => {
  try {
    const { firstname, email, password, role, skill, status } = req.body;
    const newUserObject = await createUser(firstname, email, password, role, skill, status);
    if (newUserObject.success) {
      console.log("User registered successfully!");
      res.status(201).json({ message: "User registered successfully!", newUser: newUserObject.newUser, token: newUserObject.token });
    } else {
      console.error("Error creating user:", newUserObject.error);
      res.status(400).json({ message: newUserObject.error });
    }
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

export { createNewUser };

