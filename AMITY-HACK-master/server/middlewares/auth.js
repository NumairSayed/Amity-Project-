import User from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";

const auth = async (req, res, next) => {
    try {
        const token = 
        req.cookies?.accessToken ||
        req.header("Authorization").replace("Bearer ", "");
        const user = await User.findOne({ refreshToken: token });
        if (!user) {
            throw new ApiError(401, "Unauthorized");

        }
        req.user = user;
        req.token = token;
        next();
    }
    catch (error) {
        throw new ApiError(500, "Internal Server Error");
    }
}

export { auth };