import { Router } from "express";
import indexController from "../controller/indexController";

const router = Router()

router.get("/",indexController.category.findAll)
router.post("/",indexController.category.create)
// router.put("/:id",indexController.category.update)
// router.delete("/:id",indexController.category.deleteRow)
// router.get("/:id",indexController.category.findOne)


export default router