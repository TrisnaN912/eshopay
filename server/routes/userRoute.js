import { Router } from "express";
import indexController from "../controller/indexController";

const router = Router()

router.get("/",indexController.user.findAll)
router.get("/:id",indexController.user.findOne)
router.post("/",indexController.user.create)
router.put("/:id",indexController.user.update)
router.delete("/:id",indexController.user.deleteRow)


export default router