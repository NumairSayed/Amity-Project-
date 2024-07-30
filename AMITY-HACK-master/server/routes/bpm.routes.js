import { addBpm, getBpm } from "../controllers/bpm.js";
import Router from "express";
const bpmRouter = Router();

bpmRouter.post("/add", addBpm);
bpmRouter.get("/get", getBpm);

export default bpmRouter;