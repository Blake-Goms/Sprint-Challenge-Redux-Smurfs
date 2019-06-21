import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />)}
        </div>
    )
}
export default SmurfList;