import SignUp from "../controllers/auth/signUp";
import SignIn from "../controllers/auth/signIn";
import {Router} from "express";

const router: Router = Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);


export default router;
