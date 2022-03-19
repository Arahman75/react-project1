import React, { useState } from 'react';

const User = (props) => {
    const {name,picture,email,website,phone } =props.user;
    const addMember = props.addMember;
    const [mobile, setMobile] = useState('');
    const userStyle={
        display:'flex',
        margin:'10px',
        padding:'10px',
        borderRadius:'10px',
        width:'40%',
        border:'2px solid red'
      
    }
    const showPhone =()=> setMobile(phone);
    const fullName =name.first+ " "+name.last;
    return (
       <div style={userStyle}>
           <div style={{marginTop:'25px'}}>
               <img style={{padding:'10px'}} src={picture.large} alt="" />
           </div>
            <div>
            <h1>Name: {fullName}</h1>
            <p>Email: {email}</p>
            <p><a target="_blank" href={website}>Learn about me</a></p>
            <p>Phone:{mobile}</p>
            <button onClick={showPhone}>Show phone number</button>
            <button onClick={()=>addMember(fullName)}>add me</button>

        </div>
       </div>
    );
};

export default User;