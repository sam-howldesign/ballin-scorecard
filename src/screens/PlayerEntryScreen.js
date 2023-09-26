export default function PlayerEntryScreen({ currentPage, players, newPlayerName, setNewPlayerName, setCurrentHole, setCurrentPage, setPlayers, numberOfHoles }){
    const handleAddNewPlayer = () => {
        const newPlayer = { 
          name: newPlayerName, 
          scores: []
        };

        for (let i=0; i<numberOfHoles; i++){
            newPlayer.scores.push(0);
        }
        
        setPlayers([...players, newPlayer]);
        setNewPlayerName("");
    };
    
    const handleDeletePlayerAt = (index) => {
        const playerListCopy = [...players];
        playerListCopy.splice(index, 1);
        setPlayers([...playerListCopy]);
    };

    return(
        <div className={"page " + (currentPage === 2 ? " live " : " hidden ")}>
          <h3>Who's Playin'?</h3>
          <div className="player-list">
            { players.map( (player, key) => (<div key={key}>{player.name}<button onClick={()=>handleDeletePlayerAt(key)}>X</button></div>)) }            
          </div>
          <div style={{ marginBottom: '2rem'}}>
            <input type="text" value={newPlayerName} onChange={(event)=> setNewPlayerName(event.target.value) } />
            <button disabled={newPlayerName.length === 0} onClick={handleAddNewPlayer}>Add</button>
          </div>
          <div className="flex">
            <button onClick={() => setCurrentPage(1)} style={{marginRight: '2rem'}}>Back</button>
            <button disabled={players.length === 0} onClick={()=>{ setCurrentHole(1); setCurrentPage(3); }}>Start Playing!</button>
          </div>
          
  
          
        </div>);
  }