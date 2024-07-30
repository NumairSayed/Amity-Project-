import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`\n MONGPDB connected!! HOST: ${connection.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB