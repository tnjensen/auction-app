import './menubar.scss';

export default function Menubar({menuOpen, setMenuOpen}) {
  return (
    <div className={'menubar ' + (menuOpen && 'active')}>
        <div className="left">
            <a href='#home' className='logo'>Auction App</a>
        </div>
        Welcome
        <div className="right">
            <div className="bars" onClick={() => setMenuOpen(!menuOpen)}>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </div>
        </div>
    </div>
  )
}
