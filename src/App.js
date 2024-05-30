import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./useTelegram";
import {Route, Routes} from 'react-router-dom';
import Form from "./Form";
import Header from "./Header";
import ProductList from './ProductList';


function App() {
  const {onToggleButton, tg} = useTelegram();
    useEffect(() => {
          tg.ready(onToggleButton);
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
