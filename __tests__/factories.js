const { factory } = require("factory-girl");
const {User} = require("../src/app/models");

factory.define("User", User,{
  name:"Mateus",
  email: "mateus@gmail.com",
  password:"1234"
});

module.exports = factory;