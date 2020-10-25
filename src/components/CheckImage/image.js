import React, { Component } from 'react';
import axios from 'axios';
import ImageLoader from 'react-imageloader';
import './Image.css';


class GetImages extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts:[] 
        }
    }
     imgData;
    componentDidMount(){
        axios.get('https://localhost:44357/api/Image/GetImage')
        .then(response=>{
            
        let pics= response.data.map((data)=>{return (
           
        <div key={data.imageId}>
            <img src={'../../Images/'+data.imagePath } />
        </div>

        )}
        
        );
        console.log(pics);
        this.setState({posts:pics});
           
        })
         
        .catch(error =>{
            console.log(error)
        })
    }
    render(){
        const {posts} = this.state;
        debugger;
        
        return(
            
            console.log(this.state.posts),
          
           <div>
               {this.state.posts}
               
               {/* <div key={this.state.pics}>
            <img src={ require('../../Images/S004.jpg')} />
        </div> */}
              
          
                   
           </div>
        )
    }
}

export default GetImages