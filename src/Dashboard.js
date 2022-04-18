import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import { Link } from "react-router-dom";
import Game from './components/Game';
import './App.css'
function Dashboard(props) {
  const user = getUser();


  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
  const handleStartGame = () => {
   
    
  }

  return (
    <div className="gamePgbackgroundColor">
      <div className="logoA23">  </div>
    <div className="fright">
       {user.name}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
    <div className="fcenter">
    <input type="button" onClick={handleStartGame} value="Start Game" />
    </div>
    </div>
  );
  
}

export default Dashboard;