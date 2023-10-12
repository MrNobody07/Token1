require("@nomicfoundation/hardhat-toolbox");
import "@nomicfoundation/hardhat-ethers";
import *as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env"});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.7.1",
  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [process.env.PRIV_KEY]
    }
  },
  etherscan :{
    apiKey: process.env.API_KEY
  }

};
