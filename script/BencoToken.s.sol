// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "forge-std/Script.sol";
import "../src/BencoToken.sol";

contract DeployBencoToken is Script {
    function run() external {
        vm.startBroadcast();
        
        uint256 initialSupply = 1000 * 10 ** 18;
        BencoToken bencoToken = new BencoToken(initialSupply);
        
        console.log("BencoToken deployed at:", address(bencoToken));
        
        vm.stopBroadcast();
    }
}
