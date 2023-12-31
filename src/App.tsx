import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'

function App() {

  const recorderControls = useAudioRecorder()
  const [count, setCount] = useState(0)

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <>
      <div className='recorder-timer p-1 rounded-pill d-flex align-items-center'>
        <div>
          <AudioRecorder
            onRecordingComplete={(blob) => addAudioElement(blob)}
            recorderControls={recorderControls}
            audioTrackConstraints={{
              noiseSuppression: true,
              echoCancellation: true,
            }}
          />
        </div>
        <button onClick={recorderControls.stopRecording}>Stop recording</button>
      </div>
    </>
  )
}

export default App
