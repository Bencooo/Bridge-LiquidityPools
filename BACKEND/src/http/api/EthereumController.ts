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

    // Endpoint de dépôt ERC-20
    router.post("/deposit/:address/:amount", async (req: Request, res: Response) => {
        const { address, amount } = req.params;
        try {
            const tx = await depositOnEthereum(address, amount);
            ApiResponses.httpSuccess(res, { success: true, tx });
        } catch (error) {
            ApiResponses.httpInternalError(res, error);
        }
    });
};
