import React from 'react';

export default function Bid (props) {
    return (
         <div>
            {props.expired ? "" :
                <form onSubmit={props.onSubmit}>
                    <input type={props.inputType} name={props.Name} onChange={props.onChange}/>
                    <button className="btn btn-primary" type="submit">{props.buttonText}</button>
                </form>
            }
        </div>
    )
}
