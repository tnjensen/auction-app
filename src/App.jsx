import { useState } from 'react';
import './app.scss';
import Menu from './components/menu/Menu';
import Menubar from './components/menubar/Menubar';
import Showcase from './components/showcase/Showcase';

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Menubar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Showcase/>
      </div>
    </div>
  );
}

export default App;
