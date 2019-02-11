pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';

contract Peculium is ERC20 {
  string public constant name = "Peculium";
  string public constant symbol = "PCL";
  uint8 public constant decimals = 8;

  uint256 public constant INITIAL_SUPPLY = 220785652629857398; // 2 207 856 26.29857398 PCL

  constructor() public {
    _mint(msg.sender, INITIAL_SUPPLY);
  }

  function burn(uint256 value) public {
    _burn(msg.sender, value);
  }


}

