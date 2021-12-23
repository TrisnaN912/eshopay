import { Router } from "express";
import indexController from "../controller/indexController";
import uploadHelper from "../middleware/uploadHelper";

const router = Router()

router.get("/",indexController.product_images.findAll)
router.post("/",indexController.product_images.create)
router.post("/images",uploadHelper.uploadImages,indexController.product_images.create1)
// router.put("/:id",indexController.product_images.update)
// router.delete("/:id",indexController.product_images.deleteRow)
// router.get("/:id",indexController.product_images.findOne)


export default router