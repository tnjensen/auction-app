import Menu from '../../menu/Menu';
import Menubar from '../../menubar/Menubar';
import Showcase from '../../showcase/Showcase';
import './home.scss';
import { useState } from 'react';


export default function Home() {
    const [menuOpen,setMenuOpen] = useState(false);
  return (
    <>
    <Menubar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Showcase/>
      </div>
    </>
  )
}
