import express from "express";
const router = express.Router();
import {signup,login} from "../controllers/auth.js";


router.get("/signup",signup)
router.get("/login",login)

export default router;