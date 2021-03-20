import React from 'react';
import logo from '../../Assets/images/logo.svg'
import reactLogo from '../../Assets/images/react.svg'
import classes from '../Header/Header.module.css'


const Header = () => {
    return (

        <header>
                <div className='container'>
                    <div>
                        <img className={classes.logo} src={logo} alt ='logo'/>
                    </div>
                    <div className='textRight'>
                        <img className={classes.reactLogo} src={reactLogo} alt ='react'/>
                        <strong>React</strong>
                    </div>
            
                 </div>
        </header>
        
    );
};



export default Header;