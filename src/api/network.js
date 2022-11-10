import ABI from "./abi.js";
import Web3 from "web3";

export let contractInstance;

export let web3;

const contractAddress = "0x41AcFB4D8c43FD8C48184eA6BB5253E57C530C04";
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

contractInstance = new web3.eth.Contract(ABI, contractAddress);