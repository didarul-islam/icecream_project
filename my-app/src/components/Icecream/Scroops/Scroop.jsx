import React from 'react';
import classes from '../Scroops/Scroops.module.css'

const Scroop = ({scoop}) => {
    return (
        <div className={[classes.scoop,classes[scoop]].join(' ')}>
            
        </div>
    );
};



export default Scroop;