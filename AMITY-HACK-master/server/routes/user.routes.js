import { register, login, getAllUsers, getUser, updateUser } from "../controllers/user.controller.js";


import Router from "express";
const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users", getAllUsers);
userRouter.get("/user/:_id", getUser);
userRouter.put("/user/:_id", updateUser);

export default userRouter;