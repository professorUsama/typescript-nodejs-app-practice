import app from "./src/middlewares/app";
import ENV from "./src/config/keys";
import AppRoutes from "./src/routes/index"
import DB from "./src/config/db";


app.use("/api", AppRoutes);

app.listen(ENV.PORT, ():void =>{
    console.log(`App running on ${ENV.PORT} port`);
    DB();
    
});