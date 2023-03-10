import express from "express";
// import signupController from "../controllers/signupController.js";
import { signupController, checkEmail } from '../controllers/signupController.js';
const router = express.Router();

router.post("/",checkEmail, signupController);
router.get("/", signupController);


export default router