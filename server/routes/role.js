const router = require("express").Router();
const addRole = require("../controllers/roleController");

router.post("/role", addRole);

module.exports = router;
