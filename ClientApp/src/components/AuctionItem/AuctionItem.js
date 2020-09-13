import React, { useEffect, useState } from 'react';
import useBidState from "../../hooks/useBidState";
import './AuctionItem.css';
import BidInputForm from '../BidInputForm/BidInputForm';
import Timer from '../Timer/Timer';

export default function AuctionItems(props) {
    const [bid, bidCounter, updateBid, proposeNewBid] = useBidState({
        startingPrice : props.data.startingPrice,
        counter : props.data.bids
    });

    const [timeToExpire, setExpirationSeconds] = useState(props.data.expiration);
    const [expiredAuction, setExpiredAuction] = useState(props.data.sold); 


    useEffect(() => {
        if (!timeToExpire) {
            setExpiredAuction(true);
            return
        }
        const intervalId = setInterval(() => {
            setExpirationSeconds(timeToExpire - 1)
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeToExpire]);

    return (
            <div key={props.data.id} id={`auction-${props.data.id}`} className="card auction">
            <div className="row">
                <div className="col-md-3">
                    <img className="card-img" src={"/images/" + props.data.imageName} alt="card"></img>
                </div>
                <div className="col-md-3">
                    <div className="text-container">
                        <h2 className="card-title align-middle">{props.data.item}</h2>
                        <p className="card-text align-middle">{props.data.description}</p>
                    </div> 
                </div>
                <div className="col-md-3">
                    <div className="text-container">
                        <h5 className="card-text">
                            {expiredAuction ?
                                <span className="font-weight-bold text-success">Sold:</span> :
                                <span>Current bid:</span>
                            }
                            <span className="font-weight-bold"> ${bid}</span>
                        </h5>   
                        <h5 className="card-text">Bids: <span className="font-weight-bold bid-counter">{bidCounter}</span></h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="text-container">
                        <Timer expire={timeToExpire} />
                        <BidInputForm
                            name={bid}
                            onSubmit={updateBid}
                            onChange={proposeNewBid}
                            expired={expiredAuction}
                            inputType='money'
                            buttonText="Place Bid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
