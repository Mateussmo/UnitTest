const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");
const bcrypt = require("bcrypt");

describe("User",()=>{
  beforeEach(async () =>{
    await truncate();
  });

  it("should encrypt user password", async()=>{
    const user = await User.create({name:"Mateus", email:"mateusmoreirav@gmail.com",password:"1234"});

    const hash = await bcrypt.compare('1234', user.password_hash);

    expect(hash).toBe(true);
  })
});