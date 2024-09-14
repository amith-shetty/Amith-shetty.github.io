import './App.css';

import Background from './layout/background/Background'; 
import Foreground from './layout/foreground/Foreground';


function App() {
  return (
    <div className="App">
      <Background/>
      <Foreground>
         <div>Hai</div>
      </Foreground>

    </div>
  );
}

export default App;
