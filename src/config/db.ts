import mongoose, {ConnectOptions} from "mongoose";
import ENV from "./keys";

const DB = async () =>{
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          };
        if(ENV.DATABASE.URL){
            await mongoose.connect(ENV.DATABASE.URL, options as ConnectOptions);
        }
        console.log("MongoDB connected...");
        
    } catch (error) {
        console.log(`error in mongoDB connection ${error}`);
        process.exit(1);
    }
};

export default DB;

