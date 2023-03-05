import express from "express";
import blogController from "../controllers/blogController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware,blogController.getBlogs);
router.get("/:id",authMiddleware, blogController.getBlog)
router.post("/", authMiddleware,blogController.createBlog)
router.put("/:id", authMiddleware,blogController.updateBlog)
router.delete("/:id", authMiddleware,blogController.deleteBlog)

export default router