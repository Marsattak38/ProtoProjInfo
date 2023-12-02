const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
    const provider =  new ethers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    const wallet = new ethers.Wallet("0x32deb24ee34333fe51c8e6e2eb8965747e4dce17bfd302400cd7d47bda701c55", provider);

    //get the abi and the binary
    const abi = fs.readFileSync("./pixelPlace_sol_pixelPlace.abi", "utf8");
    const binary = fs.readFileSync("./pixelPlace_sol_pixelPlace.bin", "utf8");
    
    //object use to deploy contract
    const contractFactory = new ethers.ContractFactory(abi,binary,wallet);
    console.log("Deploying, please wait...");
    //deploy the contract
    const contract = await contractFactory.deploy(); // await for wait until the contract is totally deploy
    console.log(contract);
    await contract.deploymentTransaction().wait(1);
    console.log(`Contract deployed to ${await contract.getAddress()}`)
    
}
main()


