import React from 'react';
import {countBy} from 'lodash'
import classes from '../Item/Item.module.css'


const Item = ({name,add,remove,scoops}) => {
    const scoopByCount=countBy(scoops)
    return (
        <li className={classes.item}>
            <span>{name}</span>
            <span className={classes.quantity}>{scoopByCount[name]}</span>
            <div className='right'>
                <button onClick={add.bind(this,name)} type='button' className={[classes.plus,'rounded'].join(' ')}>+</button>
                <button onClick={remove.bind(this,name)} type='button' className={[classes.minus,'rounded'].join(' ')}>-</button>

            </div>

        </li>
    );
};



export default Item;