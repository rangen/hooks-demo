import { useState, useEffect } from "react";
import Header from './Header';
import Tile from './Tile';


function App() {
  const generateRandomColorCode = () => {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  }

  const tiles = Array.from({length: 16}, (k, v) => v);

  const [universalColor, setUniversalColor] = useState(null);
  const [time, setTime] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    setIsRunning(currentState => !currentState);
  }

  useEffect(()=> {
    if (!isRunning) return;
    
    const timer = setInterval(()=> setTime(new Date().toLocaleTimeString()), 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  return(
    <div display="flex">
      <Header toggle={()=>toggleTimer()} isRunning={isRunning} resetColors={()=>setUniversalColor(null)} />
      {tiles.map(index=><Tile setAll={setUniversalColor} key={index} color={universalColor || generateRandomColorCode()} time={time} />)}
    </div>
  )
}

export default App;
