const request = require("supertest");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const { User } = require("../../src/app/models");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Mau",
      email: "mau@mau.com",
      password_hash: "123"
    });

    const response = await request(app)
      .post("/sessions")
      .send({ email: user.email, password: "123" });

    expect(response.status).toBe(200);
  });
});
