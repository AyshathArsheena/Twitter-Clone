import express from "express"
import {signup,login,logout} from "../controllers/authContoller.js"


const router = express.Router();


//signup
router.post("/signup",signup);
//login
router.post("/login",login);
//logout
router.post("/logout",logout);

export default router;