import { Router } from "express";
import authJWT from "../middleware/authJWT";
import indexController from "../controller/indexController";

const router = Router();

router.post("/signin",authJWT.authenticate,indexController.user.signin);

router.post("/signup",indexController.user.signup);

export default router;