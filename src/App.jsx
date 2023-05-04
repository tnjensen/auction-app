import { useState } from 'react';
import './app.scss';
import Menu from './components/menu/Menu';
import Menubar from './components/menubar/Menubar';

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Menubar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default App;
