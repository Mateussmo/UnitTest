const  {User}  = require('../../src/app/models');
const request = require("supertest");
const app = require("../../src/app");
const trucante = require("../utils/truncate");


describe("Authentication", () => {
  // beforeAll() - Executa antes de todos os testes
  // beforeEach() - Executa antes de cada um dos testes
  // afterEach() - Executa apos cada um dos testes
  // afterAll() - Executa depois de todos os testes

  beforeEach(async ()=>{
    await trucante();
  });
  
  it("should authenticate with valid credentials", async () => {
    const user = await User.create({ name: "mateus",
    email: "mateus@gmail.com",
    password: "1234"});

    const response = await request(app).post("/sessions").send({email:user.email, password:"1234"});
    
    expect(response.status).toBe(200);

  });

  it("should not authenticate with invalid credentials", async () => {
    const user = await User.create({ name: "mateus",
    email: "mateus@gmail.com",
    password: "1234"});

    const response = await request(app).post("/sessions").send({email:user.email, password:"12345"});
    
    expect(response.status).toBe(401);

  });


  it("should return jwt token when authenticated", async () => {
    const user = await User.create({ name: "mateus",
    email: "mateus@gmail.com",
    password: "1234"});

    const response = await request(app).post("/sessions").send({email:user.email, password:"1234"});
    
    expect(response.body).toHaveProperty("token");

  });






});
