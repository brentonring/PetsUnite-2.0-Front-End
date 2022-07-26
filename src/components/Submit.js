import React from "react";

export default function Submit(props) {
    return(
        <div className='text-center'>
            <input onClick={handleSubmit} className='btn btn-primary' type='submit' value={props.value} />
        </div>
    )
}