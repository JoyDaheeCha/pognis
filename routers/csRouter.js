import express from "express";
import routes from "../routes";
import { allCS, faq, events, reviews, notice } from "../controllers/csController";

const csRouter = express.Router();

csRouter.get(routes.allcs, allCS);
csRouter.get(routes.faq, faq);
csRouter.get(routes.notice, notice);
csRouter.get(routes.events, events);
csRouter.get(routes.reviews, reviews);

export default csRouter;
