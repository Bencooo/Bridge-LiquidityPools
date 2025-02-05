import express, { Router } from "express";
import dotenv from "dotenv"
import api from "../http/api"

dotenv.config()

const app = express();

const mainRouter: Router = express.Router();
app.use("/", mainRouter);
api(mainRouter);

const port = process.env.PORT ?? "3005";

app.listen(port,() => {
    console.log("Serveur is running on port 3000");
}).on("error", (err) => {
    throw new Error(err.message);
})