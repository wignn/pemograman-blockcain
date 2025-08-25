// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

contract simpleStorage {
    uint256 integer = 10;
    bool boolean = true;
    string myString = "Hello World";
    address myAddress = 0x0000000000000000000000000000000000000001;
    bytes myBytes = "Hello World";
    uint256 favoriteNumber;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function retrive() public view returns (uint256) {
        return favoriteNumber;
    }

    struct person {
        uint256 favoriteNumber;
        string name;
    }

    person[] public people;
    
    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(person(_favoriteNumber, _name));
    }
}
