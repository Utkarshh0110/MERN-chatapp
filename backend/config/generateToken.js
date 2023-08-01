const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  return jwt.sign({ id }, "utkarsh", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
