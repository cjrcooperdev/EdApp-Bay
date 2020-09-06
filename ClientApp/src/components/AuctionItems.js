import React, { useEffect } from 'react';
import useInputState from "../hooks/useInputState";
import './AuctionItem.css';

export default function AuctionItems(props) {

    const [currentBid, updateBid] = useInputState(props.data.startingPrice);
    const [proposedBid, updateProposedBid] = useInputState(props.data.startingPrice);
    const [bidCounter, setBidCounter] = useInputState(props.data.bids);
    const [expirationSeconds, setExpirationSeconds] = useInputState(props.data.expiration);
    const [expiredAuction, setExpiredAuction] = useInputState(props.data.sold); 


    const handleProposedBid = (e) => {
        updateProposedBid(e.target.value);
    }

    const handleSubmitBid = () => {
        if (proposedBid > currentBid) {
            updateBid(proposedBid)
            setBidCounter(bidCounter + 1)
        } else {
            alert("Your bid needs to be larger than the current bid")
        }
    }

    useEffect(() => {
        if (!expirationSeconds) {
            setExpiredAuction(true);
            return
        }
        const intervalId = setInterval(() => {
            setExpirationSeconds(expirationSeconds - 1)
        }, 1000);
        return () => clearInterval(intervalId);
    }, [expirationSeconds]);

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
                            <span className="font-weight-bold"> ${currentBid}</span>
                        </h5>   
                        <h5 className="card-text">Bids: <span className="font-weight-bold bid-counter">{bidCounter}</span></h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="text-container">
                        <h5 className="card-title">
                            Time Left: {expirationSeconds === 0 ? 
                                <span className="font-weight-bold text-danger">Expired</span> : 
                                <span className="font-weight-bold">{expirationSeconds}</span>}
                        </h5>
                        {expiredAuction ? "" :
                            <div>
                                <input type='money' onChange={handleProposedBid}/>
                                <button className="btn btn-primary" onClick={handleSubmitBid}>Place bid</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
