import './showcase.scss';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Showcase() {
    const [listings,setListings] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    axios.get('https://api.noroff.dev/api/v1/auction/listings')
    .then(res =>{
        console.log(res.data)
        setListings(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : listings.length -1) 
    : setCurrentSlide(currentSlide < listings.length - 1 ? currentSlide + 1 : 0);
  }
  return (
    <div className='works' id='works'>
      <div className='slider' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {listings.map((item) => (
        <div className='container'>
          <div className='item'>
            <div className="left">
              <div className="leftContainer">
                {/* <div className="imgContainer">
                  <img src={item.icon} />
                </div> */}
                <h2>{item.title}</h2>
                <p>
                  {item.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={item.media[0]}/>
            </div>
          </div>
        </div>))}
      </div>
      <img src='assets/arrow.png' className='arrow left' alt='arrow image' onClick={() => handleClick("left") }/>
      <img src='assets/arrow.png' className='arrow right' alt='arrow image' onClick={() => handleClick("right") }/>
    </div>
  )
}
