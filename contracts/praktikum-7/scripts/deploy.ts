import { ethers } from "hardhat"
;(async () => {
    try {
        const SimpleStorageFactory = await ethers.getContractFactory(
            "SimpleStorage"
        )
        console.log("Deploying")
        const simpleStorage = await SimpleStorageFactory.deploy()

        console.log(`Deploy contract to: ${simpleStorage.target}`)
        const currentValue = await simpleStorage.retrieve()
        console.log(`current value is: ${currentValue}`)

        //update transaction
        const transactionResponse = await simpleStorage.store(7)
        await transactionResponse.wait(1)
        const updateValue = await simpleStorage.retrieve()
        console.log(`update value is: ${updateValue}`)
    } catch (error) {
        console.log(error)
    }
})()
