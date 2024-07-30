import { addCalorie, getCalorie } from "../controllers/calorie.js";
import Router from "express";
const calorieRouter = Router();

calorieRouter.get("/get", getCalorie);
calorieRouter.post("/add", addCalorie);

export default calorieRouter;