import express, { Router } from "express";
import ApiResponses from "../ApiResponse";

export default (superRouter: Router) => {
    const router = express.Router();
    superRouter.use("/test", router);

    router.get("/", (req,res) => {
        ApiResponses.httpCreated(res, {
            Hello: "world",
        });
    });

    router.get("/:id", (req,res) => {
        ApiResponses.httpSuccess(res, {
            ...req.params,
        })
    })
};