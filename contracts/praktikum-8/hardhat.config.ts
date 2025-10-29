import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "./task/block-number"

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts:[
        "0x260678c759888f1cd11450e3b7fe5be196a655f3e345c8a82411b7b44f38ebd5"
      ],
      chainId: 1337
    } 
  }
};

export default config;
