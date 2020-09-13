import React from 'react';

export default function Timer (props) {
    return (
            <h5 className="card-title">
                Time Left: {props.expire === 0 ? 
                    <span className="font-weight-bold text-danger">Expired</span> : 
                    <span className="font-weight-bold">{props.expire}</span>}
            </h5>
            )
}
