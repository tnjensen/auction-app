import './menu.scss';

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
            <li onClick={() => setMenuOpen(false)}><a href='#home'>Home</a></li>
            <li onClick={() => setMenuOpen(false)}><a href='/login'>Log in</a></li>
            <li onClick={() => setMenuOpen(false)}><a href='/register'>Register</a></li>
            <li onClick={() => setMenuOpen(false)}><a href='#services'>Services</a></li>
            <li onClick={() => setMenuOpen(false)}><a href='#about'>About</a></li>
        </ul>
    </div>
  )
}
