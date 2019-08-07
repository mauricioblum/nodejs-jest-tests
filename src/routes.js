const routes = require("express").Router();

const { User } = require("./app/models");

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Mau",
    email: "mau@mau.com",
    password_hash: "123"
  });

  return res.json({ user });
});

module.exports = routes;
