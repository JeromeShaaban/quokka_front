import React, { useState } from "react";
import QuokkaRouter from "./Router";
import './App.css';
import MenuContext from './contexts/MenuContext';


function App() {
  const [open, setOpen] = useState(false);
  
  return (
    <MenuContext.Provider value={{ open: open, setOpen: setOpen}}>
    <div className="App">
      <QuokkaRouter />
    </div>
    </MenuContext.Provider>
  );
}

export default App;
