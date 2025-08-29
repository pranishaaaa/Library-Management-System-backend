import express from "express";

import { verifyToken, authorizationRoles } from "../middleware/verifytoken.js";
import {
  login,
  register,
} from "../controllers/authentication.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
