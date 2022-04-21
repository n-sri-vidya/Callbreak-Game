import shuffleArray from "./shuffleArray.js";
import "./Game.css";
import { Link } from "react-router-dom";

function Game() {
  
  const PackofCards=  [
        'AC',"2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC",
        "AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD",
        "AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH",
        "AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS"
    ]
  
  const shuffledCards = shuffleArray(PackofCards);
  //extract first 13 elements to player1Deck
  const player1Deck = shuffledCards.splice(0, 13);

  console.log("player1",player1Deck)
  //extract first 13 elements to player2Deck
  const player2Deck = shuffledCards.splice(0, 13);
  console.log("player2",player2Deck)
  //extract first 13 elements to player3Deck
  const player3Deck = shuffledCards.splice(0, 13);
  console.log("player3",player3Deck)
  //extract first 13 elements to player4Deck
  const player4Deck = shuffledCards.splice(0, 13);
  console.log("player4",player4Deck)
  
  

  return (
    <div className="big-box">
      <div className="player2Deck">
          <div className="card-list">
        player1
        {player1Deck.map((item, i) => (
          <img key={i} className="card" src = { require('../assets/'+ item +'.png') } alt='im'/>
        ))}
         </div>
         </div>

         <div className="player2Deck">
         <div className="card-list">
        player2
        {player2Deck.map((item, i) => (
          <img key={i} className="card" src = { require('../assets/'+ item +'.png') } alt='im'/>
        ))}
         </div>
         </div>

         <div className="player3Deck">
         <div className="card-list">
        player3
        {player3Deck.map((item, i) => (
          <img key={i} className="card" src = { require('../assets/'+ item +'.png') } alt='im'/>
        ))}
        </div>
         </div>

         <div className="player4Deck">
         <div className="card-list">
        player4
        {player4Deck.map((item, i) => (
          <img key={i} className="card" src = { require('../assets/'+ item +'.png') } alt='im' />
        ))}
        </div>
        </div>
        <div>
         <Link to="/Dashboard" className="formFieldLink">
            Go to Dashboard
          </Link>

          </div>
      </div>
    
  );
}

export default Game;