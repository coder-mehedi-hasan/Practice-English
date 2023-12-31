import { useState } from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'

function App() {

  const recorderControls = useAudioRecorder()
  const [src, setSrc] = useState(null)

  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    // setSrc(src)
    audio.controls = true;
    document.getElementById('body')?.appendChild(audio)

  };

  return (
    <>
      <div className='' style={{ width: "100%", height: '100vh', background: "gray", margin: "0", display: 'flex', justifyContent: "center", alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", flexDirection: "column",justifyContent:"center",alignItems:"center" }}>
            <AudioRecorder
              onRecordingComplete={(blob) => addAudioElement(blob)}
              recorderControls={recorderControls}
              audioTrackConstraints={{
                noiseSuppression: true,
                echoCancellation: true,
              }}
            />
            <button onClick={recorderControls.stopRecording} style={{border:"1px ridge",cursor:"pointer",height:"40px",margin:'10px 0',width:"40px",borderRadius:"50%"}}>Stop</button>
          </div>
          <div id='body' style={{ margin: "20px" }}>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
