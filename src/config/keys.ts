import dotenv from "dotenv";
dotenv.config({path: "./.env.development"});


export default {
    PORT: process.env.PORT || 40001,
    DATABASE: {
        URL: process.env.CONNECTION_STRING,
    }
};