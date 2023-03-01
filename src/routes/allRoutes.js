import express from "express"
import blogRoute from "./blogRoute.js"
import signupRoute from "./signupRoute.js"
import messageRoute from "./messageRoute.js";
import loginRoute from "./loginRoute.js";
import draftblogRoute from "./draftblogRoute.js";
import getusersRoute from "./getusersRoute.js";

const router = express.Router()

// all routes
router.use("/blogs", blogRoute)
router.use("/signup",signupRoute )
router.use("/message",messageRoute)
router.use("/login", loginRoute)
router.use("/draft",draftblogRoute)
router.use("/users",getusersRoute)

export default router