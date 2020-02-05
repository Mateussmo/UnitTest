const  {User}  = require('../../src/app/models');

describe("Authentication", () => {
  it("should sum two numbers", async () => {
    const user = await User.create({ name: "mateus",
    email: "mateus@gmail.com",
    password_hash: "123"})
    
    console.log(user);
    expect(user.email).toBe("mateus@gmail.com");

  });
});
