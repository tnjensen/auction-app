import './register.scss';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
   if(confirmPassword.current.value !== password.current.value){
      password.current.setCustomValidity("Passwords don't match!");
   }else{
    const user = {
      name: username.current.value,
      email: email.current.value,
      /* avatar: "string", */
      password: password.current.value
    }
    try{
      await axios.post("https://api.noroff.dev/api/v1/auction/auth/register", user);
      /* history.push("/login"); */
    }catch(err){
      console.log(err);
    }
   }   
  }
  /* const [user,setUser] = useState([]); */
 /*  user = [
    {
      "name": "ThoJen84480",
      "email": "ThoJen84480@stud.noroff.no",
      "password": "!Yzems224"
    }
  ] */
/*   useEffect(() => {
    axios.post('https://api.noroff.dev/api/v1/auction/auth/register', user)
    .then(res =>{
        console.log(res.data)
        setUser(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}, []) */
  return (
    <div className="register">
    <div className="wrapper">
        <div className="registerLeft">
            <h3 className="registerLogo">BidCove</h3>
            <span className="registerDesc">
            Register and gain NOK 1000 to bid on our auctions            </span>
        </div>
        <div className="registerRight">
            <form className="registerBox" onSubmit={handleClick}>
                <input placeholder='username' required ref={username} className="registerInput" />
                <input placeholder='email' required ref={email} className="registerInput" type="email" />
                <input placeholder='password' required ref={password} className="registerInput" type="password" minLength="6" />
                <input placeholder='confirm password' required ref={confirmPassword} className="registerInput" type="password" />
                <button className="signUpButton" type="submit">Sign up</button>     
                <button className="logintoButton">Log into Account</button>
            </form>           
        </div>
    </div>
    </div>
  )
}
