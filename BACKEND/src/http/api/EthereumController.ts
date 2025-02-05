import express, { Router, Request, Response } from "express";
import ApiResponses from "../ApiResponse";
//import { depositOnEthereum } from "../services/EthereumService";

export default (superRouter: Router) => {
    const router = express.Router();
    superRouter.use("/ethereum", router);

    // Route de test
    router.get("/", (req: Request, res: Response) => {
        ApiResponses.httpCreated(res, { Hello: "world" });
    });
};
