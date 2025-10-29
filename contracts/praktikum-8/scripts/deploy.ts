import { ethers } from "hardhat"

(async () => {
    try {
        const SimpleStorageFactory = await ethers.getContractFactory(
            "SimpleStorage"
        )
        console.log("Deploying")
        const simpleStorage = await SimpleStorageFactory.deploy()

        console.log(`Deploy contract to: ${simpleStorage.target}`)

        
    } catch (error) {
        console.log(error)
    }
})()
