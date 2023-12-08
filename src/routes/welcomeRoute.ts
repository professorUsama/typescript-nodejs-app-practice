import Message from "../controllers/welcome"
import {Router} from "express";

const router: Router = Router();

router.get("/message", Message);


export default router;