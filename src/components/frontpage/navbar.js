import React, { Component } from 'react';
import {BrowserRouter as Router,Link } from 'react-router-dom';


class NavigateBar extends Component{
    render(){
        return(
            <div>
        
           <Link to="/signUp">
                   Sign Up
               </Link>
     
            <Link to="/signIn">
                Sign In
            </Link>
            <Link to="/showimage">
                Get Image
            </Link>
            <Link to="/getproducts">
                Get Products
            </Link>
            </div>
           
        );
    }
}
export default NavigateBar