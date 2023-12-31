import { Router } from 'express';
import Welcome from "./welcomeRoute";
import Auth from "./auth";
const router: Router = Router();

router.use("/welcome", Welcome);
router.use("/auth", Auth);

export default router;