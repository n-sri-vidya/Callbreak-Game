import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import signUp from './components/signUp';


function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
  
    <div className="App">
    <div className="appLeft" />
      <div className="appRight">
          <p className="floating"><b className="callbreakTitle">CALLBREAK</b></p>
   
 
    <div class="main">
      
        
     <div class="col-md-6 col-sm-12">
       <div className="formCenter">
      <div className='formField'>
      
      Login<br /><br /> </div>
      <div className='formField'>
      <label className="formFieldLabel" htmlFor="name"/>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div className='formField' style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" className='formFieldButton' value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
    <div>   
  
    <p >Don't Have an Account? </p> <Link to="/signUp" className="formFieldLink">
              Sign Up
            </Link>
            
          

            
      </div>
    </div>
    </div>
    </div>
    </div>
    
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;