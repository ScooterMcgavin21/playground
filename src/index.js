import './styles/index.css';

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(process.env.MAIN_URL);
web3.eth
  .getBlockNumber()
  .then((blockNumber) => console.log("Block number: " + blockNumber));


const objectx = {
  l: 1
}
console.log(objectx);
