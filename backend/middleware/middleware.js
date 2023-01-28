import jwt from "jsonwebtoken";

export const checkTokenMiddleWare = (req, res, next) => {
  const token = req.body.token;
  jwt.verify(token, "secret", (err, result) => {
    if (err) {
      res.status(403).send(err);
    }
    return next();
  });
};

export const Role = (req, res, next) => {
  const role = req.body.role;
  if (role == "Admin") {
    console.log(true);
    next();
  } else {
    console.log(false);
    res.send("error");
  }
};
