import React from 'react';
import classes from '../Icecream/Icecream.module.css'
import Scroop from '../Icecream/Scroops/Scroop'


const Icecream = ({scoops}) => {
    // const flavors=Object.keys(items)
    return (
        <div>
            <div className={classes.icecream}>
                <p className={classes.cone}/>
                
                    {
                        scoops.map((scoop)=>(
                             <Scroop key={`${scoop}${Math.random()}`} scoop={scoop} />
                        ))
                    }
                   
                    
                
                
                <div className={classes.cherry}/>

            </div>
            
        </div>
    );
};



export default Icecream;