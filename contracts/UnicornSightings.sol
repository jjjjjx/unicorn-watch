// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract UnicornSightings {
    uint256 totalUnicorns;

    constructor() {
        console.log("I am so smart! S M R T!");
    }

    function reportUnicornSighting() public {
        totalUnicorns += 1;
        console.log("%s spotted a unicorn!", msg.sender);
    }

    function getTotalUnicornSightings() public view returns (uint256) {
        console.log("We have %d total unicorns!", totalUnicorns);
        return totalUnicorns;
    }
}
