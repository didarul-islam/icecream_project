import React from 'react';
import classes from '../Modal/Modal.module.css';

const Modal = ({children}) => {
    return (
        <div>
            <div className={classes.backdrop}>
                <div className={classes.modalBody}>{children}</div>
            </div>
            
        </div>
    );
};


export default Modal;