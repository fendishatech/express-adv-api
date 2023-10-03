const router = require("express").Router();

router.post("/register", (req, res) => {
  return res.json({ message: "Register", request: req.body });
});

router.post("/login", (req, res) => {
  return res.json({ message: "Login", request: req.body });
});

router.post("/logout", (req, res) => {
  return res.json({ message: "Logout", request: req.body });
});

module.exports = router;
