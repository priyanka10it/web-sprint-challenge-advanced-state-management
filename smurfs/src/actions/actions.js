import axios from 'axios';
//FETCH_DATA
export const FETCH_DATA='FETCH_DATA';
export const FETCH_SUCCESS="FETCH_SUCCESS";
export const FETCH_FAIL="FETCH_FAIL";

export const fetchSmurfs=()=>(dispatch)=>{
 dispatch({type:FETCH_DATA})
     axios.get("http://localhost:3333/smurfs")
     .then(response=>{
         console.log("Response",response.data);
         dispatch({type:FETCH_SUCCESS,payload:response.data})
     })
     .catch(error=>{
         console.log("Something happend!",error);
         dispatch({type:FETCH_FAIL,payload:error})
     })
 }

//POST_DATA
export const POST_DATA='POST_DATA';
export const POST_SUCCESS="POST_SUCCESS";
export const POST_FAIL="POST_FAIL";

export const postSmurfs=(smurfs)=>(dispatch)=>{
 dispatch({type:POST_DATA})
     axios.post("http://localhost:3333/smurfs",smurfs)
     .then(response=>{
         console.log("Post Success",response.data);
         dispatch({type:POST_SUCCESS,payload:response.data})
     })
     .catch(error=>{
         console.log("Error Posting!",error);
         dispatch({type:POST_FAIL,payload:error})
     })
 }