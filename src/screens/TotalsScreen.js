export default function TotalsScreen({ currentPage, players, setCurrentPage, numberOfHoles }){
    const holeHeaderList = [];
    for (let i=1; i<=numberOfHoles; i++){
        holeHeaderList.push(<th key={i}>{i}</th>);
    }

    return(
        <div className={"page " + (currentPage === 4 ? " live " : " hidden ")}>
            <h3>Totals Page!</h3>
            <div className="table-container">
            <table className="totals-table">
                <thead>
                <tr>
                    <th>Hole</th>
                    {holeHeaderList}
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {
                    players.map( (player, key) => (
                        <tr key={key}>    
                            <td>{player.name}</td>
                            {player.scores.map( (score, scoreKey) => ( <td key={scoreKey}>{score}</td> ) )}
                            <td>{player.scores.reduce((a,c)=> parseInt(a) + parseInt(c ?? 0), 0)}</td>  
                        </tr>
                        )
                    )
                }
                </tbody>
            </table>
            </div>

            <div className="flex">
                <button  style={{marginRight: '2rem'}} onClick={()=>setCurrentPage(3)}>Back</button>
                <button onClick={()=>window.location.reload(false)}>Start Over</button>
            </div>
            
        </div>
    );
  }