import { network } from "hardhat"
const { ethers } = await network.connect();

(async () => {
    try {
        const SimpleStorageFactory = await ethers.getContractFactory(
            "SimpleStorage"
        )
        console.log("Deploying SimpleStorage contract...")
        const simpleStorage = await SimpleStorageFactory.deploy()
        await simpleStorage.waitForDeployment()

        const address = await simpleStorage.getAddress()
        console.log(`Contract deployed to: ${address}`) 

        const currentValue = await simpleStorage.retrieve()
        console.log(`Current value is: ${currentValue}`)

        console.log("Storing value 7...")
        const transactionResponse = await simpleStorage.store(7)
        await transactionResponse.wait(1)
        
        const updateValue = await simpleStorage.retrieve()
        console.log(`Updated value is: ${updateValue}`)
    } catch (error) {
        console.error("Error during deployment:", error)
        process.exit(1)
    }
})()