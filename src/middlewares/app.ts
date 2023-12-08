import express, {Express} from "express";

const app: Express = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

export default app;