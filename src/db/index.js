import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
      const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      })
      console.log(`DB mongo connected: ${connectionInstance.connection.host}`);

    }catch(error){
        console.log("there is an error", error);
        process.exit(1);
    }
}

export default connectDB;