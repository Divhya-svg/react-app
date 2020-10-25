import React,{Component} from 'react';
import {Form,Input,Label,FormGroup,FormFeedback,Button} from 'reactstrap';
import {isEmail} from 'validator';
import axios from 'axios';

class Register extends Component{
    constructor(props){
        super(props);
        //this.state=this.getInitialState();
        this.state={
            data:{
                RoleId:'',
                Name:'',
                MobileNumber:'',
                DateOfBirth:'',
                Gender:'',
                EmailId:'',
                Password:'',
                ConfirmPassword:''
            },
            errors:{}
        }
    }
    getInitialState =() =>({
        data:{
            RoleId:'',
            Name:'',
            MobileNumber:'',
            DateOfBirth:'',
            Gender:'',
            EmailId:'',
            Password:'',
            ConfirmPassword:''
        },
        errors:{}
    });
    handleChange =(e) =>{
        this.setState({
            data:{
                //get everything from data spreading through entire object of the state and putting all values in state
                ...this.state.data,
                [e.target.name]: e.target.value//overriding currently changed element
            },
            errors:{
                ...this.state.errors,
                [e.target.name]:''
            }
        })
    }
    validate = () =>{
        const {data} = this.state;

        let errors={};

        if(data.RoleId === '') errors.RoleId='RoleId cannot be empty';
        if(data.Name === '') errors.Name='Name cannot be blank';
        if(data.MobileNumber === '') errors.MobileNumber='Mobile number cannot be blank';
        if(data.DateOfBirth === '') errors.DateOfBirth='Dob cannot be blank';
        if(data.Gender === '') errors.Gender='Gender neccessary';
        if(!isEmail(data.EmailId)) errors.EmailId='Email must be valid';
        if(data.EmailId === '') errors.EmailId='Email cannot be blank';
        if(data.Password === '') errors.Password='Password must be valid.';
        if(data.ConfirmPassword !== data.Password) errors.ConfirmPassword='Passwords must match.';
        return errors;
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        
        const {data} =this.state;
        const errors =this.validate();
        if(Object.keys(errors).length===0)//if no errors
        {
            const headers={ 'Content-Type': 'application/json','Accept': 'application/json'}
           // const temp={RoleId:1,Name:"abc"}
            console.log(data);
            axios.post('https://localhost:44357/api/Users/InsertUsers',data,{headers:headers})
            .then(response =>{
                console.log(response)
            })
            // .catch(error =>{
            //     console.log(Object)
            //     )
            // })
            //call api here
            //Resetting the form
            this.setState(this.getInitialState())
        }else{
            this.setState({errors});
        }
       
    }
    render(){
        const {data,errors}=this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label form="RoleId">RoleId</Label>
                    <Input id="RoleId" 
                    value={data.RoleId} 
                    invalid={errors.RoleId ? true:false}
                    name="RoleId"
                    onChange={this.handleChange}
                    />
                    {/* <img src={require('../../Images/S004.jpg')}/> */}
                     <FormFeedback>{errors.RoleId}</FormFeedback>
                </FormGroup>
               
                <FormGroup>
                    <Label form="Name">Name</Label>
                    <Input id="Name" 
                    value={data.Name} 
                    invalid={errors.Name ? true:false}
                    name="Name"
                    onChange={this.handleChange}
                    />
                     <FormFeedback>{errors.Name}</FormFeedback>
                </FormGroup>
  
                <FormGroup>
                    <Label form="MobileNumber">Mobile</Label>
                    <Input id="MobileNumber" 
                    value={data.MobileNumber} 
                    invalid={errors.MobileNumber ? true:false}
                    name="MobileNumber"
                    onChange={this.handleChange}
                    />
                    <FormFeedback>{errors.MobileNumber}</FormFeedback>
                </FormGroup>
                
                <FormGroup>
                    <Label form="DateOfBirth">Dob</Label>
                    <Input id="DateOfBirth" 
                    value={data.DateOfBirth} 
                    invalid={errors.DateOfBirth ? true:false}
                    name="DateOfBirth"
                    onChange={this.handleChange}
                    />
                     <FormFeedback>{errors.DateOfBirth}</FormFeedback>
                </FormGroup>
               
                <FormGroup>
                    <Label form="Gender">Gender</Label>
                    <Input id="Gender" 
                    value={data.Gender} 
                    invalid={errors.Gender ? true:false}
                    name="Gender"
                    onChange={this.handleChange}
                    />
                    <FormFeedback>{errors.Gender}</FormFeedback>
                </FormGroup>
                
                <FormGroup>
                    <Label form="EmailId">EmailId</Label>
                    <Input id="EmailId" 
                    value={data.EmailId} 
                    invalid={errors.EmailId ? true:false}
                    name="EmailId"
                    onChange={this.handleChange}
                    />
                     <FormFeedback>{errors.EmailId}</FormFeedback>
                </FormGroup>
               
                <FormGroup>
                    <Label form="Password">Password</Label>
                    <Input id="Password" 
                    value={data.Password} 
                    type="password"
                    invalid={errors.Password ? true:false}
                    name="Password"
                    onChange={this.handleChange}
                    />
                    <FormFeedback>{errors.Password}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label form="ConfirmPassword">ConfirmPassword</Label>
                    <Input id="ConfirmPassword" 
                    value={data.ConfirmPassword} 
                    type="password"
                    invalid={errors.ConfirmPassword ? true:false}
                    name="ConfirmPassword"
                    onChange={this.handleChange}
                    />
                    <FormFeedback>{errors.ConfirmPassword}</FormFeedback>
                </FormGroup>
                <Button color="primary">Register</Button>
            </Form>
        );
    }
}

export default Register