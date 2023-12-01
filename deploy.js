const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
    const provider =  new ethers.JsonRpcProvider("HTTP://10.188.254.242:7545");
    const wallet = new ethers.Wallet("0xf52b30911f7dc72ff2fa089d4e0956e321737f3cd0e50c8d9bdc8b7bde8c00bc", provider);

    //get the abi and the binary
    const abi = fs.readFileSync("./prototype_sol_wallet.abi", "utf8");
    const binary = fs.readFileSync("./prototype_sol_wallet.bin", "utf8");
    
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


