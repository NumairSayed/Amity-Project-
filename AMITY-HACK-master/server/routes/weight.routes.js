import { addWeight, getWeight } from "../controllers/weight.js";
import Router from "express";
const weightRouter = Router();

weightRouter.get("/get", getWeight);
weightRouter.post("/add", addWeight);

export default weightRouter;
