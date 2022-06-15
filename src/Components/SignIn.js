import { React, useState } from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

//import '../App.css';
const SignIn = () => {
    const [testData, setTestData] = useState('')
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [userpass, setUserpass] = useState('');
    const [userphone, setUserphone] = useState('');
    const [show, setShow] = useState('')
    //const[data,setData]=useState([]);
    const handleAddData = () => {
        if (username !== '' && useremail !== '' && userpass !== '' && userphone !== '') {
            let objdata = {
                Username: username, Useremail: useremail, Userpass: userpass, Userphone: userphone
            }
            setShow('');
            axios.post('/saveUserDetails',objdata);
        }
        else {
            setShow("ALL FIELDS ARE MANDATORY");
        }
    }

    const emailRegex = /^[a-zA-Z0-9._!@#$*]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    const validateEmail = (event) => {
        const useremail = event.target.value;
        setUseremail(useremail)
        let patternemail = emailRegex.test(useremail)
        if (patternemail) {
            setIsValid(true);
            setMessage('');
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }

    };


    const validatePhonenumber = (e) => {

        var userphone = e.target.value;
        setUserphone(userphone)
        const reg = new RegExp('^[0-9]+$');
        let patterntest = reg.test(userphone)

        if (userphone !== "") {
            if (!patterntest) {
                e.preventDefault();
            }
            else {
                if (userphone.length > 10) {
                    e.preventDefault();
                }
                else {
                    setTestData(userphone);
                }

            }
        }
        else {
            setTestData(userphone);
        }

    }

    return (
        <>

            <div className='signin-part' >
                <br />
                <br />
                <br />
                <br />
                <h1>Sign in</h1>


                <TextField type="text"
                    label="Enter Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required />
                <br />
                <br />

                <TextField type="text"
                    label="Enter UserEmail"
                    onChange={validateEmail}
                    required />
                <div className={`message ${isValid ? 'success' : 'error'}`}>
                    {message}
                </div>
                <br />
                <br />
                <TextField
                    type="text"
                    label="Enter Phone Number"
                    required
                    onChange={validatePhonenumber}
                    value={testData}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            +91
                        </InputAdornment>,
                    }}
                />
                <br />
                <br />
                <TextField type="password"
                    label="Enter Password"
                    value={userpass}
                    helperText={show}
                    onChange={(event) => setUserpass(event.target.value)}
                    required />
                <br />
                <br />

                <Button variant="contained" onClick={handleAddData}>SIGN IN</Button>




            </div>
        </>
    )
}

export default SignIn;

