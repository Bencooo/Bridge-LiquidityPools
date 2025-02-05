// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BencoVault {
    IERC20 public immutable bencoToken;
    
    mapping(address => uint256) public balances;
    
    event Deposit(address indexed user, uint256 amount);
    event Withdrawal(address indexed user, uint256 amount);
    
    constructor(address _bencoToken) {
        bencoToken = IERC20(_bencoToken);
    }
    
    function deposit(uint256 amount) public {
        require(amount > 0, "Amount must be greater than 0");
        require(bencoToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        
        balances[msg.sender] += amount;
        emit Deposit(msg.sender, amount);
    }
    
    function withdraw(uint256 amount) public {
        require(amount > 0, "Amount must be greater than 0");
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        balances[msg.sender] -= amount;
        require(bencoToken.transfer(msg.sender, amount), "Transfer failed");
        
        emit Withdrawal(msg.sender, amount);
    }
}
