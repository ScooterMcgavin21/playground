import React, { useEffect, useState } from 'react';

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(process.env.MAIN_URL);
web3.eth
  .getBlockNumber()
  .then((blockNumber) => console.log("Block number: " + blockNumber));




function BlockData() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getData()
  }, []);
  
  const getData = async () => {
    //Using fetch
    const response = await fetch(process.env.COVALENTHQ)
    const data = await response.json()
    setItems(data.data.items);
  }
  
  return (
    <div>
      {console.log(items)}
      <ul>
      {items.map(item => (
          <li key={item.chain_id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlockData;
