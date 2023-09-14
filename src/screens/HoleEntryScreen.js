
export default function HoleEntryScreen({ currentPage, numberOfHoles, setNumberOfHoles, setCurrentPage }){  
    return(
        <div className={"page " + (currentPage === 1 ? " live " : " hidden ")}>
          <h3>How Many Holes You Playin'?</h3>
          <input type="number" value={numberOfHoles} onChange={(event)=>setNumberOfHoles(event.target.value)} /><label>Number of Holes</label>
          <br />
          <br />
          <button disabled={numberOfHoles <= 0} onClick={()=>setCurrentPage(2)}>Add Players</button>
        </div>
    );
}