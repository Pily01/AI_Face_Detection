
import './App.css';

import React, {useRef} from 'react';
import Webcam from "react-webcam"
import * as facemesh from "@tensorflow-models/facemesh"
import * as tf from "@tensorflow/tfjs"

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null)

  return (
    <div className="App">
      <header className='App-header'>
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 0,
            width: 640,
            height: 480,
          }}
        />
        <canvas
        ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 0,
            width: 640,
            height: 480,
          }}
        />
      </header>
      
    </div>
  );
}

export default App;
