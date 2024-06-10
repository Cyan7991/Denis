const { Signup, Login } = require("../Controllers/AuthController");
const { insertPro } = require("../Controllers/ProductController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
router.post("/table/insert", insertPro);

module.exports = router;
