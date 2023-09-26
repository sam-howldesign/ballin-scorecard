import { useState } from "react";
import HoleEntryScreen from "./screens/HoleEntryScreen";
import PlayerEntryScreen from "./screens/PlayerEntryScreen";
import HolesScreens from "./screens/HolesScreens";
import TotalsScreen from "./screens/TotalsScreen";


function App() {
  const [currentHole, setCurrentHole] = useState(0);
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfHoles, setNumberOfHoles] = useState(1);
  const [newPlayerName, setNewPlayerName] = useState("");  

  function DebugState(){
    return (
      <div>
        <h2>Debug State</h2>
        <div>
          Current Page {currentPage} <br />
          Number of Holes {numberOfHoles} <br />
          Players : {players.map((player, key) => (<span key={key}>{player.name} {player.scores}</span>)) } <br />
          <br />
        </div>
      </div> 
    );
  }

  return (
    <div className="App">
      <h1>Golf Ballin&apos; Scorecard</h1>

      <HoleEntryScreen 
        currentPage={currentPage}                         
        numberOfHoles={numberOfHoles}
        setNumberOfHoles={setNumberOfHoles}
        setCurrentPage={setCurrentPage}
      />

      <PlayerEntryScreen 
        currentPage={currentPage}
        players={players}
        newPlayerName={newPlayerName}
        setNewPlayerName={setNewPlayerName}
        setCurrentHole={setCurrentHole}
        setCurrentPage={setCurrentPage}
        setPlayers={setPlayers}
        numberOfHoles={numberOfHoles}
      />      

      <HolesScreens 
        currentPage={currentPage}
        currentHole={currentHole}        
        players={players}
        setPlayers={setPlayers}
        numberOfHoles={numberOfHoles}
        setCurrentHole={setCurrentHole}
        setCurrentPage={setCurrentPage}
      />

      <TotalsScreen 
        currentPage={currentPage}
        players={players}        
        setCurrentHole={setCurrentHole}
        setCurrentPage={setCurrentPage}
        numberOfHoles={numberOfHoles}
      />       

      <DebugState />

    </div>
  );
}

export default App;
