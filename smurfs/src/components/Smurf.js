import React from 'react';


function Smurf(props) {
    return (
        <div>
            <h2> {props.smurf.name} </h2>
            <h2> {props.smurf.age} <span>years old</span> </h2>
            <h2> {props.smurf.height}  <span>cm</span> </h2>
        </div>
    )
}

export default Smurf
