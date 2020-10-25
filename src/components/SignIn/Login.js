import React, { Component } from 'react';
import {Form,Input,Label,FormGroup,FormFeedback,Button} from 'reactstrap';
import {isEmail} from 'validator';
import axios from 'axios';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            EmailId:'',
            Password:'',
            errors:{}
        }
    
    }
    getInitialState =()=>({
        data:{
            EmailId:'',
            Password:''
        },
      
    });

    handleChange=(e) =>{
        // this.setState({
        //     data:{
        //         ...this.state.data,
        //         [e.target.name]: e.target.value
        //     },
        //     errors:{
        //         ...this.state.errors,
        //         [e.target.name]:''
        //     }
        // })
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    validate = () =>{
        //const {data}=this.state;
        let errors={};
        if(!isEmail(this.state.EmailId)) errors.EmailId='Emailid must be valid';
        if(this.state.EmailId === '') errors.EmailId='Email cannot be blank';
        if(this.state.Password === '') errors.Password='Password cannot be blank';
        return errors;

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {data} = this.state;
        const errors=this.validate();
        if(Object.keys(errors).length===0)//if no errors
        {
            const headers={'Content-Type':'application/json','Accept':'application/json'}
            console.log(data);
            // axios.get('https://localhost:44357/api/Login?EmailId='+this.data.EmailId+'&Password='+this.data.Password,{headers:headers})
            // //https://localhost:44357/api/Login/divhyadarsh429@gmail.com/dbinfosys29
            // .then(response=>{
            //     console.log(response);
            // })
            var request = {   params: { EmailId:this.state.EmailId,Password:this.state.Password  } } 
            //axios.get('http://example.com/', request);
            axios.get('https://localhost:44357/api/Login',request,{headers:headers});

            //call api here
            //Resetting the form
            this.setState(this.getInitialState())
        }else{
            this.setState({errors});
        }
    }
    
    render(){
        const{data,errors}=this.state 
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label form="EmailId">Email</Label>
                    <Input id="EmailId" value={this.state.EmailId} invalid={errors.EmailId ? true:false}
                   name="EmailId"
                   onChange={this.handleChange} 
                   />
                   <FormFeedback>{errors.EmailId}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label form="Password">Password</Label>
                    <Input id="Password" type="password" value={this.state.Password} invalid={errors.Password ? true:false}
                   name="Password"
                   onChange={this.handleChange}
                   />
                   <FormFeedback>{errors.Password}</FormFeedback>
                </FormGroup>
                <Button color="primary">SignIn</Button>
            </Form>
        );
    }
}
export default Login