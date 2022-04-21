import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import { Link } from "react-router-dom";
import './App.css';

function Dashboard(props) {
  const user = getUser();


  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
  


  return (
    <div className="App">
      {/* <div className="logoA23">  </div> */}
    <div>
       {user.name}!<br /><br />
      <input type="button" className='fright' onClick={handleLogout} value="Logout" />
    </div>
    <div>
     
  
      <div>   
  
   <Link to="/Game" className="formFieldLink">
            Start Game
          </Link>
          
    </div>
    </div>
    </div>
    
  );
  
}

export default Dashboard;