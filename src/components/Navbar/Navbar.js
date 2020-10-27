import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Hoc from '../../Hoc/Hoc';
import classes from './Navbar.module.css'
const Navbar = () => {
   
    return ( 
    <Hoc>
        <nav className={classes.Navbar}>
            <div className={classes.div1}>
                <NavLink to="/">
                    <img className={classes.logo} src={require('../../Images/logo.png')} />
                </NavLink>
                <NavLink to="/" style={{textDecoration:'none'}} activeStyle={{color:'#009ffd'}} >
                    <span className={classes.span}>Product</span>
                </NavLink>
            </div>
            <div className={classes.div2}>
                <NavLink to="/cart">
                    <button className={classes.button}>
                        <i className="pi pi-shopping-cart" style={{marginRight:'4px',fontSize:'1.4rem'}}></i>My Cart
                    </button>
                </NavLink>
            </div>
        </nav>
    </Hoc>
     );
}
 
export default Navbar;