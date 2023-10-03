const router = require("express").Router();
// ROUTES
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");

router.use("/", authRoutes);
router.use("/users", userRoutes);

module.exports = router;
