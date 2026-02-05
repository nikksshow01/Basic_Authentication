import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbc = async () => {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("DB CONNECTED");
    }
    catch(err){
        console.error("DB CONNECTION ERROR:", err.message);
        process.exit(1);
    }
};

export default dbc;