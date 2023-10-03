const router = require("express").Router();

router.get("/", (req, res) => {
  return res.json({ message: "Users List", request: req.body });
});

router.get("/:id", (req, res) => {
  return res.json({ message: "Single User Detail", request: req.body });
});

router.put("/:id", (req, res) => {
  return res.json({ message: "Update user record", request: req.body });
});

router.put("/change-password/:id", (req, res) => {
  return res.json({ message: "Change Password", request: req.body });
});

router.delete("/:id", (req, res) => {
  return res.json({ message: "Delete record", request: req.body });
});

module.exports = router;
