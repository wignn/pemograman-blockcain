// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

contract DataStore {
    struct Person {
        string nama;
        string alamat;
        uint16 tanggal_lahir;
        string jenis_kelamin;
    }

    Person[] person;

    function storeData (string memory nama, string memory alamat, uint16 tanggal_lahir, string memory jenis_kelamin) public {
        person.push(Person(nama, alamat, tanggal_lahir, jenis_kelamin));
    }
}