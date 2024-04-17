const request = require("supertest");
const server = require("../server.js");

describe("Reading data", () => {
  test("GET users with filters returns users", async () => {
  const response = await request('http://localhost:3000')
    .get("/users")
    .query({ role: "Full-stack", skill: "JavaScript", status: "Freelance" });

  expect(response.statusCode).toBe(200);
  expect(response.body.message).toBe("Users read successfully!");
  expect(Array.isArray(response.body.users)).toBe(true);
  })
})
;
