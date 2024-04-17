import { createBusiness } from "../models/createBusinessModel.js";

const createNewBusiness = async (req, res) => {
  try {
    const { firstname, email, password, role, service } = req.body;
    const newBusinessObject = await createBusiness(firstname, email, password, role, service);
    if (newBusinessObject.success) {
      console.log("Business registered successfully!");
      res.status(201).json({ message: "Business registered successfully!", newBusiness: newBusinessObject.newBusiness, token: newBusinessObject.token });
    } else {
      console.error("Error creating business:", newBusinessObject.error);
      res.status(400).json({ message: newBusinessObject.error });
    }
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

export { createNewBusiness };