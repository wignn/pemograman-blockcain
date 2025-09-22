// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./PriceConverter.sol";

contract FundMe {
    address public owner;
    constructor() {
        owner = msg.sender;
    }
    using PriceConverter for uint256;
    uint256 public minimumUsd = 50 * 1e18;

    address[] public funders;
    mapping(address=>uint256) public addressToAmountFunded;

    function fund() public payable { 
        require(msg.value.getConversionRate() >= minimumUsd, "Maaf Nilai yang Anda input kurang");
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender]=msg.value;
    }

    function withdraw() public {
        for(uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++) {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder]=0;
        }
        funders = new address[](0);
        (bool callSuccess, /*bytes memory dataReturned*/) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, "Call Failed");
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Pengirim bukan seorang owner");
        _;
    }
    
}