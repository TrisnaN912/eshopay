import { Router } from "express";
import indexController from "../controller/indexController";

const router = Router()

router.get("/",indexController.line_items.findAll)
router.post("/",indexController.line_items.create)
// router.put("/:id",indexController.line_items.update)
// router.delete("/:id",indexController.line_items.deleteRow)
// router.get("/:id",indexController.line_items.findOne)


export default router