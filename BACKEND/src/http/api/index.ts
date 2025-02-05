import express, { Router } from "express";
import TestController from "./TestController";
import EthereumController from "./EthereumController";

export default (superRouter: Router) => {
    const router = express.Router();
    superRouter.use("/api", router);

    TestController(router);
    EthereumController(router);
}