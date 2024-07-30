import { addRequest, getAllRequests, getMyRequest, getRequest } from "../controllers/request.js";
import Router from "express";
import {auth} from "../middlewares/auth.js";
const requestRouter = Router();


requestRouter.get("/my-request", getMyRequest);
requestRouter.post("/add", addRequest);
requestRouter.get("/get", getAllRequests);
requestRouter.get("/get/:id", getRequest);

export default requestRouter;
