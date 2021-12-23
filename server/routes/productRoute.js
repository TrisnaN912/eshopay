import { Router } from "express";
import indexController from "../controller/indexController";

const router = Router()

router.get("/",indexController.product.findAll)
// router.get("/:id",indexController.product.findOne)
router.post("/",indexController.product.create)
// router.put("/:id",indexController.product.update)
// router.delete("/:id",indexController.product.deleteRow)


export default router