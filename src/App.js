import './App.css';
import React, { useEffect } from 'react';
import './Header.css';
import './Button.css';
import {Route, Routes} from 'react-router-dom';
import ProductList from "./ProductList";
import Form from "./Form";

const tg = window.Telegram.WebApp;
const Header = () => {

  const {user, onClose} = useTelegram();

    
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};
const Button = (props) => {
  return (
      <button {...props} className={'button' + props.className} />
  );
};

export function useTelegram() {
   
  const onClose = () => {
      tg.close()
    }

    const onToggleButton = () => {
      if (tg.MainButton.isVisible)  {
      tg.MainButton.hide();
    } else {
          tg.MainButton.snow();
    }
  }

    return {
      onClose,
      onToggleButton,
      tg,
      user: tg.initDataUnsafe?.user, 
    }
}


function App() {
  const {onToggleButton, tg} = useTelegram();
    useEffect = (() => {
          tg.ready();
    }, [])
   

  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
