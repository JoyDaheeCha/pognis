import express from "express";
import routes from "../routes";

const csRouter = express.Router();

csRouter.get(routes.allcs, (req, res) => res.send("showing all customer service list"));
csRouter.get(routes.faq, (req, res) => res.send("FAQ"));
csRouter.get(routes.notice, (req, res) => res.send("notice"));
csRouter.get(routes.events, (req, res) => res.send("events"));
csRouter.get(routes.reviews, (req, res) => res.send("review"));

export default csRouter;
