import React from "react";

export default function Submit(props) {
    return(
        <div className='text-center'>
            <input className='btn btn-primary' type='submit' value={props.value} />
        </div>
    )
}