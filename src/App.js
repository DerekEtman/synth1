import React from 'react';
import * as Tone from "tone";
import './App.css';

function App() {
  const synth = new Tone.AMSynth().toMaster()
  console.log("Hello there")
  
  

  // synth.triggerAttackRelease("C4","8n");
  // synth.triggerAttackRelease("D5","8n",1);
  // synth.triggerAttackRelease("E5","8n",2);
  // synth.triggerAttackRelease("F5","8n",3);
  // synth.triggerAttackRelease("G5","8n",4);



  return (
    <div className="App">
      <div className="App-header">
        <h2>MAKE NOISE YOU STUPID FU-</h2>

      </div>
      <div className="App-body">
        test
      </div>

    </div>
  );
}

export default App;
