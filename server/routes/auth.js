const router = require("express").Router();
const { login, register, reset } = require("../controllers/authController");
const { check, validationResult } = require("express-validator");
const verifyToken = require("./middlewares/verificationToken");
const { confirmation } = require("../controllers/SendEmail");

router.post(
  "/register",
  [
    check("name").trim().escape().notEmpty(),
    check("email").isEmail().notEmpty(),
    check("password").trim().escape().notEmpty().isLength({ min: 5, max: 12 }),
  ],
  register
);

router.post("/login", login);

/* reset password */
router.post("/reset", reset);

/* Router confirmation */
router.get("/confirmation/:token", confirmation);

/* test is function verify work or not */
router.post("/test", verifyToken, (req, res) => {
  res.send("welcome to page test");
});

module.exports = router;
