import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuctionItems from "../AuctionItem/AuctionItem";

export default function Auctions() {
  const [auctions, setAuction] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = 
        await axios.get('/api/SampleData/Auctions')
                    .catch((error) => { console.log(error)});
        setAuction(response.data)
    }
    getData();
  }, []);

  return (
    <div className="auctions container">
      {auctions === false ? 
        <p className="loading">Loading ...</p> : 
        auctions
        .sort((a, b) => {
          return a.expiration - b.expiration
        })
        .map(auctionData => (
          <AuctionItems key={auctionData.id} data={auctionData}/>
        ))}
    </div>
  );
}

