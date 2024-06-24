const Product = require("../Models/Product");
module.exports.insertPro = async (req, res, next) => {
  try {
    const { name, price, description } = req.body;
    if (!name || !price || !description) {
      return res.json({ message: "All fields are required" });
    }
    const existingUser = await Product.findOne({ name });
    if (existingUser) {
      return res.json({ message: "Product already exists" });
    }
    const user = await Product.create({ name, price, description });
    const token = createSecretToken(user._id);
    res
      .status(201)
      .json({ message: "Product insert successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
