import React, { useState } from "react";

export default function TextArea(props) {

    function handleChange(e) {
        console.log(e.target);
    }
    return(
        <div className="form-group">
            <label className="col-form-label" htmlFor={props.name}>{props.label}</label>
            <textarea onChange={handleChange} className="form-control" id={props.name} name={props.name} required />
        </div>
    )
}