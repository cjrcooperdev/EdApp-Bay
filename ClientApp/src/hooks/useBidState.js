import { useState } from "react";
export default function useBid (data) {
    const [bid, setBid] = useState(data.startingPrice);
    const [proposedBid, setProposedBid] = useState();
    const [count, setCount] = useState(data.counter);

    const updateBid = e => {
        e.preventDefault();
        if (proposedBid > bid) {
            updateBidCount();
            setBid(proposedBid)
        } else {
            return alert("Bids need to be higher than current bid.");
        }
    };

    const updateProposedBid = e => {
        setProposedBid(e.target.value)
    }

    const updateBidCount = () => {
        setCount(count + 1);
    }

    return [bid, count, updateBid, updateProposedBid]
}