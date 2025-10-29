const { ethers } = require("ethers");
require("dotenv").config();
const fs = require("fs");

/**
 * @param {string} abiFile
 * @param {string} binaryFile
 */
const deploy = async (abiFile, binaryFile) => {
  try {
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    const abi = fs.readFileSync(abiFile, "utf-8");
    const binary = fs.readFileSync(binaryFile, "utf-8");

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

    console.log("Deploying contract...");

    const contract = await contractFactory.deploy();

    await contract.waitForDeployment();

    console.log("Contract deployed!");
    console.log( await contract.getAddress());
  } catch (e) {
    console.error(e);
  }
};

(async () => {

  console.log("deploy SimpleStorage");
  await deploy(
    "./contracts_praktikum-2_SimpleStorage_sol_SimpleStorage.abi",
    "./contracts_praktikum-2_SimpleStorage_sol_SimpleStorage.bin"
  );

  console.log("\n")
  console.log("deploy StorageFactory");
  await deploy(
    "./contracts_praktikum-2_StorageFactory_sol_StorageFactory.abi",
    "./contracts_praktikum-2_StorageFactory_sol_StorageFactory.bin"
  )

  
  console.log("\n")
  console.log("deploy StorageFactory");

  await deploy(
    "./contracts_praktikum-2_ExtraStorage_sol_ExtraStorage.abi",
    "./contracts_praktikum-2_ExtraStorage_sol_ExtraStorage.bin"
  )
  
})();
