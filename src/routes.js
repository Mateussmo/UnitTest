const routes = require("express").Router();
const { User } = require("./app/models");

User.create({name:"Mateus Moreira", email:"mateusmoreirav@gmail.com", password_hash:"123466"});

module.exports = routes;