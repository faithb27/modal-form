import React, {userState, useState} from 'react';
import * as AiIcons from 'react-icons/ai';
import './modal.css';
import { Link } from 'react-router-dom';




function Modal() {
  const [values, setValues]=useState
  firstName='';
  lastName='';
  email='';
  phoneNumber='';
  countryResidence='';
  address='';

  Change =(e) => {
      this.setState(
        {
          [e.target.name]:e.target.value
        });
  };

  
  return (
    <div className='Modal bc'>
       
       <h1></h1>
     <form className='outer-container'>
       <input 
       name="firstName"
       placeholder="First name" 
       value={this.state.firstName} change ( e:any ): viod
        onChange={e => this.}change(e)} 
        />

<input placeholder="Last name" 
       value={this.state.lastName}
        onChange={e => this.setState({lastName:e.target.value})}/>
      
      <input placeholder="Email" 
       value={this.state.email}
        onChange={e => this.setState({email:e.target.value})}/>
      
      <input placeholder="Phone Number" 
       value={this.state.phoneNumber}
        onChange={e => this.setState({phoneNumber:e.target.value})}/>
      
      <input placeholder="Country Residence" 
       value={this.state.countryResidence}
        onChange={e => this.setState({countryResidence:e.target.value})}/>
      
      <input placeholder="Address" 
       value={this.state.address}
        onChange={e => this.setState({address:e.target.value})}/>
      
      <div className='over-lay'>

        <div>
        <a href="/">
                    <AiIcons.AiOutlineClose 
                        className="close-btn"
                    />
                </a>
                
        </div>
        </div> 

     </form>
    </div>
  );
}

export default Modal;
