import express from "express";
import Link from "../model/Link.js";
import {
  createLink,
  getAllLink,
  getLink,
  deleteLink,
} from "../controller/links.js";
import { checkToken } from "../middleware/middleware.js";
import { adminCheck } from "../middleware/role.js";
const linkRouter = express.Router();

const test = (req, res) => {
  // const PageSize = req.query.PageSize;
  // const CurrentPage = req.query.CurrentPage;
  // const postquery = Link.find();
  // if (PageSize && CurrentPage) {
  //   postquery.skip(PageSize * (CurrentPage - 1));
  // }
  res.status(200).json({ query: req.query, params: req.params });
};

linkRouter.post("/createlink", checkToken, createLink);
linkRouter.get("/", getAllLink);
linkRouter.get("/:shortid", getLink);
linkRouter.route("/omg").get(test);
linkRouter.delete("/:id", adminCheck, deleteLink);

export default linkRouter;
