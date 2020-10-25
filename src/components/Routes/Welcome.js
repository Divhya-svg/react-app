import React, { Component } from 'react';
import {BrowserRouter ,Switch,Route,withRouter} from 'react-router-dom';
//import {Route} from 'react-router-dom';
import MainRegister from '../SignUp/MainRegister';
import NavigateBar from '../frontpage/navbar';
import Login from '../SignIn/Login';
import GetImages from '../CheckImage/image';
import GetProducts from '../ProductsDisplay/GetProducts';


class Welcome extends Component{
render(){
    return(
        <div>
           
        <BrowserRouter>
        <NavigateBar/>
            <Switch>
            <Route exact path="/signUp" component={withRouter(MainRegister)} />

             {/* <Route exact path="/signup" component={Register}/> 
             <Route exact path="/a" component={Register}/> */}
             <Route exact path="/signIn" component={withRouter(Login)}/>
             <Route exact path="/showimage" component={withRouter(GetImages)}/>
             <Route exact path="/getproducts" component={withRouter(GetProducts)}/>
            </Switch>
       
        </BrowserRouter>
        </div>
        
        
    );
}
}

export default Welcome