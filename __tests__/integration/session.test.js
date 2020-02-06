const  {User}  = require('../../src/app/models');

describe("Authentication", () => {
  it("should authenticate with valid credentials", async () => {
    const user = await User.create({ name: "mateus",
    email: "mateus@gmail.com",
    password_hash: "123"})
    
  
    expect(user.email).toBe("mateus@gmail.com");

  });
});
