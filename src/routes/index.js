const router = require("express").Router();

router.get("/", (req, res) => {
  return "Router Is set well";
});

module.exports = router;
