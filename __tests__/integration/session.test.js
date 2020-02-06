const  {User}  = require('../../src/app/models');
const request = require("supertest");
const app = require("../../src/app");
const trucante = require("../utils/truncate");

describe("Authentication", () => {
  it("should authenticate with valid credentials", async () => {
    const user = await User.create({ name: "mateus",
    email: "mateus@gmail.com",
    password_hash: "123"});

    const response = await request(app).post("/sessions").send({email:user.email, password:"123"});
    
  
    expect(response.status).toBe(200);

  });
});
