import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN
}))

// to read simple form like entry
app.use(express.json({limit : "16kb"}));

//to read sample from url
app.use(express.urlencoded({extended : true, limit : "16kb"}));

// to read sample like pdf etc to a folder(here public)
app.use(express.static("public"));

// cookie parser for security , works on server level and used to perform CRED operation over cookies
app.use(cookieParser());





export { app };
