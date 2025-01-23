//
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// User routes
router.get("/users", (req, res) => {
  res.send([
    {
      name: "Ilias Shah",
      email: "ilias.shah@questionpro.com",
      age: 32,
    },
    {
      name: "John Doe",
      email: "john.doe@questionpro.com",
      age: 35,
    },
    {
      name: "Jane Doe",
      email: "jane.doe@questionpro.com",
      age: 30,
    },
  ]);
});

module.exports = router;
