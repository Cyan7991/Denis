const Prodcut = require("../Models/ProductModel");
module.exports.insertPro = async (req, res, next) => {
  try {
    const { pname, pmanu, pdate, role } = req.body;
    console.log(req.body);
    // if (!pname || !pmanu || !pdate || !role) {
    //   return res.json({ message: "All fields are required" });
    // }
    // const existingUser = await User.findOne({ pname });
    // if (existingUser) {
    //   return res.json({ message: "Product already exists" });
    // }
    const user = await Prodcut.create({ pname, pmanu, pdate, role });
    res
      .status(201)
      .json({ message: "Product insert successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
