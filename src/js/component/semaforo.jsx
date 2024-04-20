import React, { useState } from "react";


const Semaforo = () => {
  const [colorActual, setColorActual] = useState("roja ");
  
  return (
    <div className="container  justify-content-center " >
      <div className="d-flex flex-column justify-content-center align-items-center mt-4">
        
        <div onClick={()=>setColorActual("roja ")} 
        className={"roja " +(colorActual === "roja " ? "glow" : "") }></div>
        
        <div onClick={()=>setColorActual("amarilla ")}
         className={"amarilla " +(colorActual === "amarilla " ? "glow" : "") } ></div>
        
        <div onClick={()=>setColorActual("verde ")}
        className={"verde " +(colorActual === "verde " ? "glow" : "") }></div>
      </div>
    </div>
  );
};

export default Semaforo;
