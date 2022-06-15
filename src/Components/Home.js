import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Home=()=>{
    const[showmessage,setShowmessage]=useState('')
    const[Usernameval,setUsernameval]=useState('')
    const[Userpassval,setUserpassval]=useState('')
    const navigate = useNavigate();
    const handleCheck=()=>{
        if(!(Usernameval&&Userpassval))
        {
      setShowmessage('All FIELDS ARE MANDATORY')
        }
        else
        {
            setShowmessage('')
        }
    }
    const handlechangepage=()=>{
        navigate("/signin")
    
    }
return(
    <>
    <div className='login-part'>
        <h1>Login</h1>
    
        <TextField type="text"
          label="Enter Username"
          value={Usernameval}
          onChange={(event)=>setUsernameval(event.target.value)}
          required
           />
           <br/>
           <br/>

      <TextField type="text"
          label="Enter Password"
          value={Userpassval}
          onChange={(event)=>setUserpassval(event.target.value)}
          required
          helperText={showmessage}
           />
           <br/>
           <br/>
           <Button variant="contained" onClick={handleCheck}>SUBMIT</Button>

           <br/>
           <br/>
           <Button variant="contained" onClick={handlechangepage}>
            NEW USER
            </Button>
                   

           

    </div>
    </>

)
}

export default Home