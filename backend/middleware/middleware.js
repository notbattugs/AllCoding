import jwt from "jsonwebtoken";
import Link from "../model/link.js";
import User from "../model/User.js";
export const checkTokenMiddleWare = (req, res, next) => {
  const token = req.body.token;
  jwt.verify(token, "secret", (err, result) => {
    if (err) {
      res.status(403).send(err);
    }
    return next();
  });
};

export const Role = async (req, res, next) => {
  const { id } = req.params;
  const link = await Link.findById(id);
  const user = await User.findById(link.user_id);
  console.log(id);
  if (user.role == "Admin") {
    return next();
  } else {
    res.send("No");
  }
};
