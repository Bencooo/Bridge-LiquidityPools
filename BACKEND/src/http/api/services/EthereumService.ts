import { JsonRpcProvider, Wallet, Contract, parseUnits, formatEther } from "ethers";
import dotenv from "dotenv";
import vaultAbi from "../abis/BencoVault.json";
import erc20Abi from "../abis/BencoToken.json";

dotenv.config();

const provider = new JsonRpcProvider("http://127.0.0.1:8545");
const wallet = new Wallet(process.env.PRIVATE_KEY!, provider);

const vaultContract = new Contract(process.env.ETH_CONTRACT!, vaultAbi, wallet);
const erc20Contract = new Contract(process.env.ERC20_CONTRACT!, erc20Abi, wallet);

export const depositOnEthereum = async (address: string, amount: string) => {
    const amountInWei = parseUnits(amount, 18);

    const balance = await provider.getBalance(wallet.address);
    console.log(`Balance actuelle: ${formatEther(balance)} ETH`);

    const approveTx = await erc20Contract.approve(process.env.ETH_CONTRACT!, amountInWei);
    await approveTx.wait();

    const tx = await vaultContract.deposit(address, amountInWei);
    await tx.wait();

    return tx.hash;
};
