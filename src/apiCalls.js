import axios from 'axios';

export const loginCall = async (userCredentials, dispatch)=>{
    dispatch({type: "LOGIN_START"});
    try{
        const res = await axios.post("https://api.noroff.dev/api/v1/auction/auth/login", userCredentials);
        dispatch({type: "LOGIN_SUCCESS", payload:res.data});
    }catch(error){
        dispatch({type: "LOGIN_FAILURE", payload:error});
    }   
}