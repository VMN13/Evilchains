import './App.css';
import React, { useEffect } from 'react';
import {useTelegram} from "src/hooks/useTelegram";
const {user, onClose} = useTelegram();


function App() {
  const {onToggleButton, tg} = useTelegram();
    useEffect = (() => {
          tg.ready();
    }, [])
   

  return (
    <div className="App">
     
      <button onClick={onToggleButton}>Закрыть</button>
    </div>
  );
}

export default App;
