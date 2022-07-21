import React from "react";

export default function TextArea(props) {
    return(
        <div className="form-group">
            <label className="col-form-label" htmlFor={props.name}>{props.label}</label>
            <textarea className="form-control" id={props.name} name={props.name} required />
        </div>
    )
}