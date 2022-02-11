import SlotM from "./Slot"
import Sdata from "./Slotdata";
function App() {
  return (
    <>
    <h1 className="heding_style">🎰Wel-Come To <span style={{color:"red"}}>Slot machine game</span>🎰 </h1>
   <div className="slotmachine">
   {Sdata.map((val,index)=>{
     
     return(
     <SlotM 
     key={index}
     x={val.x}
     y={val.y}
     z={val.z}
   />
   )})}
   </div>
    </>
    
  );
}

export default App;
