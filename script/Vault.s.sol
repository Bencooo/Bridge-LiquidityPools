// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "forge-std/Script.sol";
import "../src/Vault.sol";

contract DeployBencoVault is Script {
    function run() external {
        vm.startBroadcast();
        
        address bencoTokenAddress = address(0x18451d1Db6aEac34B9244d1e36906360E2FD3fBB);
        BencoVault bencoVault = new BencoVault(bencoTokenAddress);
        
        console.log("BencoVault deployed at:", address(bencoVault));
        
        vm.stopBroadcast();
    }
}
