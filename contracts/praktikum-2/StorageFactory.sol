// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "contracts/praktikum-1/SimpleStorage.sol";

contract StorageFactory {
    SimpleStorage[] public SimpleStorageArray;

    function createSimpleStorageContract() public {
        SimpleStorage simpleStorage = new SimpleStorage();
        SimpleStorageArray.push(simpleStorage);
    }

    function sfStorage(
        uint256 _simpleStorageIndex,
        uint256 _simpleStorageNumber
    ) public {
        SimpleStorage simpleStorage = SimpleStorageArray[_simpleStorageIndex];
        simpleStorage.store(_simpleStorageNumber);
    }

    function sfGetStorage(uint256 _simpleStorageIndex)
        public
        view
        returns (uint256)
    {
        SimpleStorage simpleStorage = SimpleStorageArray[_simpleStorageIndex];
        return simpleStorage.retrieve();
    }
}
