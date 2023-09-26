export default function HolesScreens({ currentPage, currentHole, players, setPlayers, numberOfHoles, setCurrentHole, setCurrentPage}){
    const nextHoleMessage = () => {
      if (currentHole < numberOfHoles){
        return "On to Hole " + (currentHole + 1);
      }else{
        return " Go To Totals Page ";
      }      
    };

    const previousHoleMessage = () => {
      if (currentHole === 1){
        return "Edit Players";
      }else{
        return "Back to Hole " + (currentHole - 1);
      }
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

    const handlePreviousHoleClick = () => {
      if (currentHole === 1){
        setCurrentPage(2);
      }else{
        setCurrentHole(currentHole - 1);      
      }
    };

    return (
        <div className={"page " + (currentPage === 3 ? " live " : " hidden ")}>
          <h3>Hole #{currentHole}</h3>
          
          <div className="holes-data">
            {
              players.map( (player, key) => (
                <div key={key}>
                  {player.name} 
                  <input type="number" min="0" max="9" value={ player.scores[currentHole - 1] ?? 0 } 
                    onChange={ 
                      (event) => { 
                        const playerListCopy = [...players];
                        playerListCopy[key].scores = [...players[key].scores];
                        playerListCopy[key].scores[currentHole - 1] = event.target.value;
                        setPlayers([...playerListCopy]); 
                      } 
                    } />
                  {player.scores.reduce((a,c)=> parseInt(a) + parseInt(c ?? 0), 0)}
                </div>
              ) )
  
            }
          </div>
          <div className="flex">
            <button style={{marginRight: '2rem'}} onClick={ handlePreviousHoleClick }>{ previousHoleMessage() }</button>
            <button onClick={ handleNextHoleClick }>{ nextHoleMessage() }</button>
          </div>
          <button onClick={ ()=>setCurrentPage(4) }>Finish Early</button>
        </div>
    );
  }