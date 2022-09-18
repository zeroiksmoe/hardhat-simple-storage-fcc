const { task } = require("hardhat/config")

// Tasks are good for things that need to be executed regularly
// MOstly scripts are sufficient
task("block-number", "Prints the current block number").setAction(
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(blockNumber)
    }
)

module.exports = {}
