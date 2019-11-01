import multer from "multer";
import routes from "./routes";

const multerProduct = multer({ dest: "uploads/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "포그니스";
  res.locals.routes = routes;
  next();
};

export const uploadImage = multerProduct.single("imageUrl");
