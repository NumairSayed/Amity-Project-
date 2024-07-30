import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

const corsConfig = {
    credentials: true,
    origin: "http://localhost:5173",
};
app.options("*", cors(corsConfig));
app.use(cors(corsConfig));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());


import userRouter from "./routes/user.routes.js";
app.use("/api/user", userRouter);

import weightRouter from "./routes/weight.routes.js";
app.use("/api/weight", weightRouter);

import bpmRouter from "./routes/bpm.routes.js";
app.use("/api/bpm", bpmRouter);

import calorieRouter from "./routes/calorie.routes.js";
app.use("/api/calorie", calorieRouter);

import requestRouter from "./routes/request.routes.js";
app.use("/api/request", requestRouter);

import doctorRouter from "./routes/doctor.routes.js";
app.use("/api/doctor", doctorRouter);

export default app;


