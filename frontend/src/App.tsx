import './App.css';
import Background from '../../frontend/src/background/Background';
import Canvas from '../../frontend/src/canvas/Canvas'

function App() {
  return (
    <div className="App">
      <Background/>
      <Canvas>
        <p>I am Amith</p>
      </Canvas>
    </div>
  );
}

export default App;
