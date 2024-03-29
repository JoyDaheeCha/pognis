import express from "express";
import routes from "../routes";
import { changePassword, editProfile, cart, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.cart, cart);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;
