import express from "express";
import {
  getAlllinks,
  createlink,
  deletelink,
  findlink,
} from "../controller/link.js";
import { Role } from "../middleware/middleware.js";

const router = express.Router();

router.route("/").get(getAlllinks).post(createlink);
router.delete("/:id", Role, deletelink);
router.route("/:params").get(findlink);

export default router;
