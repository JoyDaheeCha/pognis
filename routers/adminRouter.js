import express from "express";
import routes from "../routes";
import { getUploadProduct, postUploadProduct } from "../controllers/adminController";
import { uploadImage } from "../middleware";

const adminRouter = express.Router();

adminRouter.get(routes.uploadProduct, getUploadProduct);
adminRouter.post(routes.uploadProduct, uploadImage, postUploadProduct);

export default adminRouter;
