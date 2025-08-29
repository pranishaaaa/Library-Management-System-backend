import express from "express";
import {
  createBook,
  getAllBooks,
  getBookByIsbn,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";

import { authorizationRoles, verifyToken } from "../middleware/verifytoken.js";

const router = express.Router();

router.post("/books", verifyToken, authorizationRoles("librarian"), createBook);
router.get("/books", verifyToken, authorizationRoles("librarian"), getAllBooks);
router.get(
  "/books/:isbn",
  verifyToken,
  authorizationRoles("librarian"),
  getBookByIsbn
);
router.put(
  "/books/:isbn",
  verifyToken,
  authorizationRoles("librarian"),
  updateBook
);
router.delete(
  "/books/:isbn",
  verifyToken,
  authorizationRoles("librarian"),
  deleteBook
);

export default router;
