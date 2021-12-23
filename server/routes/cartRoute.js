import { Router } from "express";
import indexController from "../controller/indexController";

const router = Router()

router.get("/",indexController.cart.findAll)
router.post("/",indexController.cart.create)
// router.put("/:id",indexController.cart.update)
// router.delete("/:id",indexController.cart.deleteRow)
// router.get("/:id",indexController.cart.findOne)


export default router