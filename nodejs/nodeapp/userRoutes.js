import express from "express"
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
const SECRET = "sometext";
import auth from "./auth.js";
const Router = express.Router();



const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
  } catch (err) {
    console.log(err);
    return res.json({ message: "Invalid Token" });
  }
};

const authorize = (role) => {
  return (req, res, next) => {
    if (role === req.role) {
      next();
    } else {
      return res.json({ message: "Unauthorized access" });
    }
  };
};

Router.post("/register",register);

Router.patch("/:id", authenticate, authorize("admin"),userUpdate); 

Router.delete(
  "/:id",
  authenticate,
  authorize("admin"),
 userDelete
);

Router.get("/users", authenticate, authorize("admin"), showUsers);

Router.post("/login",login);

export default Router