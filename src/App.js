import { useState } from "react";
import './App.css';

function App() {
  const [currentHole, setCurrentHole] = useState(0);
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfHoles, setNumberOfHoles] = useState(0);
  const [newPlayerName, setNewPlayerName] = useState("");  

  const handleAddNewPlayer = () => {
    const newPlayer = { 
      name: newPlayerName, 
      scores: []
    };

    setPlayers([...players, newPlayer]);
    setNewPlayerName("");
  };

  const handleNextHoleClick = () => {
    if (currentHole < numberOfHoles){
      //there are more holes, lets put some balls in 'em
      setCurrentHole(currentHole + 1);      
    }else{
      //no more holes go to a different page
      setCurrentPage(4);
    }
  };

  const nextHoleMessage = () => {
    if (currentHole < numberOfHoles){
      return "On to Hole " + (currentHole + 1);
    }else{
      return " Go To Totals Page ";
    }
    
  };
///TODO: create ability to delete a player
  return (
    <div className="App">
      <h1>Golf Ballin&apos; Scorecard</h1>
      <div className={"page " + (currentPage === 1 ? " live " : " hidden ")}>
        <h3>How Many Holes You Playin'?</h3>
        <input type="number" value={numberOfHoles} onChange={(event)=>setNumberOfHoles(event.target.value)} /><label>Number of Holes</label>
        <br />
        <br />
        <button disabled={numberOfHoles <= 0} onClick={()=>setCurrentPage(2)}>Add Players</button>
      </div>

      <div className={"page " + (currentPage === 2 ? " live " : " hidden ")}>
        <h3>Who's Playin'?</h3>
        <div className="player-list">
          { players.map( (player, key) => (<div key={key}>{player.name}</div>)) }
        </div>
        <div>
          <input type="text" value={newPlayerName} onChange={(event)=> setNewPlayerName(event.target.value) } />
          <button disabled={newPlayerName.length === 0} onClick={handleAddNewPlayer}>Add</button>
        </div>
        <button disabled={players.length === 0} onClick={()=>{ setCurrentHole(1); setCurrentPage(3); }}>Start Playing!</button><br />

        <button onClick={() => setCurrentPage(1)}>Back</button>
      </div>

      <div className={"page " + (currentPage === 3 ? " live " : " hidden ")}>
        <h3>Hole #{currentHole}</h3>
        
        <div>
          {
            players.map( (player, key) => (
              <div key={key}>
                {player.name} 
                <input type="number" value={ player.scores[currentHole] ?? 0 } 
                  onChange={ 
                    (event) => { 
                      const playerListCopy = [...players];
                      playerListCopy[key].scores = [...players[key].scores];
                      playerListCopy[key].scores[currentHole] = event.target.value;
                      setPlayers([...playerListCopy]); 
                    } 
                  } />
              </div>
            ) )

          }
        </div>

        <button onClick={ handleNextHoleClick }>{ nextHoleMessage() }</button><br />
      </div>
      
      <div className={"page " + (currentPage === 4 ? " live " : " hidden ")}>
          <h3>Totals Page!</h3>
          <div>
            {
              players.map( (player, key) => (
                <div key={key}>{player.name} {player.scores.reduce((a,c)=> parseInt(a) + parseInt(c ?? 0), 0)}  </div>
              )
            )}
          </div>
      </div>
            
      <div>
        <h2>Debug State</h2>
        <div>
          Current Page {currentPage} <br />
          Number of Holes {numberOfHoles} <br />
          Players : {players.map((player, key) => (<span key={key}>{player.name} {player.scores}</span>)) } <br />
          <br />
        </div>
      </div>      
    </div>
  );
}

export default App;
