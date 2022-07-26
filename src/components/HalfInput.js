import React from "react";

export default function HalfInput(props) {
    return(
        <div className="form-group col-sm-6">
            <label className="col-form-label" htmlFor={props.name}>{props.label}</label>
            <input className="form-control" id={props.name} name={props.name} required />
        </div>
    )
}