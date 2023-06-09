import express from "express";
import { getPost, createPost, updatePost, deletePost } from "../controllers/post.js";
const router = express.Router();

// http://localhost:5000/products

router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
export default router;