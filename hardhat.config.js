/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.9",
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url: "https://rpc-mumbai.maticvigil.com",
         accounts: [PRIVATE_KEY]
      },
      polygon: {
         url: "https://rpc-mainnet.maticvigil.com",
         accounts: [PRIVATE_KEY]
      },
   },
}