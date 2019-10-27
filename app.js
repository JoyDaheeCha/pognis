import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";

import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import csRouter from "./routers/csRouter";
import routes from "./routes";
import { localsMiddleware } from "./middleware";

const app = express();

app.set("view engine", "pug");
app.set("views", "views");
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.cs, csRouter);

export default app;
