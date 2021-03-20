import React from 'react';
import IcecreamBuilder from '../../containers/IcecremBuilder/IcecreamBuilder'
import classes from '../Body/Body.module.css'


const Body = () => {
    return (
        <div className={classes.mainBody}>
          <IcecreamBuilder/>
        </div>
    );
};



export default Body;