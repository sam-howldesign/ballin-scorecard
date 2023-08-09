import { useState } from "react";
import './App.css';

function App() {
  const [scorecard, setScorecard] = useState({
    currentPage: 1,
    numberOfHoles: 0,
    players: []
  });

  const [newPlayerName, setNewPlayerName] = useState("");

  const handleNumberOfHolesChange = (event) => {
    let newHoleNumber = event.target.value;
    setScorecard({
      ...scorecard,
      numberOfHoles: newHoleNumber
    });
  };

  const handleAddPlayersClick = () => {
    setScorecard({
      ...scorecard,
      currentPage: 2
    });
  };

  const handleAddNewPlayer = () => {
    let newPlayerArray = [...scorecard.players, newPlayerName];
    setScorecard({
      ...scorecard,
      players: newPlayerArray
    });
    setNewPlayerName("");
  };
///TODO: create ability to delete a player
  return (
    <div className="App">
      <h1>Golf Ballin&apos; Scorecard</h1>
      <div className={"page " + (scorecard.currentPage === 1 ? " live " : " hidden ")}>
        <h3>How Many Holes You Playin'?</h3>
        <input type="number" value={scorecard.numberOfHoles} onChange={handleNumberOfHolesChange} /><label>Number of Holes</label>
        <br />
        <br />
        <button disabled={scorecard.numberOfHoles <= 0} onClick={handleAddPlayersClick}>Add Players</button>
      </div>

      <div className={"page " + (scorecard.currentPage === 2 ? " live " : " hidden ")}>
        <h3>Who's Playin'?</h3>
        <div className="player-list">
          { scorecard.players.map( (player, key) => (<div key={key}>{player}</div>)) }
        </div>
        <div>
          <input type="text" value={newPlayerName} onChange={(event)=>{setNewPlayerName(event.target.value)}} />
          <button disabled={newPlayerName.length === 0} onClick={handleAddNewPlayer}>Add</button>
        </div>
        <button disabled={scorecard.players.length === 0} onClick={()=>{setScorecard({...scorecard, currentPage: 3})}}>Start Playing!</button><br />

        <button onClick={()=>{setScorecard({...scorecard, currentPage: 1})}}>Back</button>
      </div>
{/* 
TODO: create page 3 - (3+number of holes)
each page will be a scorecard

TODO: Create Page 25? Display full results and option to email?
*/}


      <div>
        <h2>Debug State</h2>
        <div>
          Current Page {scorecard.currentPage} <br />
          Number of Holes {scorecard.numberOfHoles} <br />
          Players : {scorecard.players.map((player, key) => (<span key={key}>{player} </span>)) } <br />

          New Player Name {newPlayerName} <br />
        </div>
      </div>      
    </div>
  );
}

export default App;
