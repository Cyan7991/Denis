const {
  insertPro,
  getPro,
  updatePro,
  deletePro,
} = require("../Controllers/ProductController");
const router = require("express").Router();

router.post("/product", insertPro);
router.get("/product", getPro);
router.put("/product/:id", updatePro);
router.delete("/product/:id", deletePro);

module.exports = router;
