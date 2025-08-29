import express from "express";

import {
  borrowBook,
  returnBook,
  borrowHistory,
} from "../controllers/borrow.controller.js";
import { authorizationRoles, verifyToken } from "../middleware/verifytoken.js";

const router = express.Router();

router.post(
  "/borrow",
  verifyToken,
  authorizationRoles("borrower", "librarian"),
  borrowBook
);
router.post(
  "/borrow/return",
  verifyToken,
  authorizationRoles("borrower", "librarian"),
  returnBook
);
router.get(
  "/borrow/history",
  verifyToken,
  authorizationRoles("borrower", "librarian"),
  borrowHistory
);

export default router;
