import React,{useState} from 'react';
import {connect} from 'react-redux';
import {postSmurfs} from '../actions/actions';

const SmurfsForm=(props)=>{

const[smurf,setSmurf]=useState({
    name:"",
    age:"",
    height:""
})  

const handleChange=e=>{
    setSmurf({...smurf,[e.target.name]:e.target.value})
}

const submitHandler=e=>{
    e.preventDefault();
    props.postSmurfs(smurf);
}
    return(
        <div>
            <form id="smurfForm">
                <label htmlFor="name">Name:</label>
                <input 
                type="text"
                name="name"
                label="name"
                placeholder="Enter name"
                value={props.name}
                onChange={handleChange}
                className="input"
                />

                <label htmlFor="age">Age:</label>
                <input 
                type="text"
                name="age"
                label="age"
                placeholder="Enter age"
                value={props.age}
                onChange={handleChange}
                className="input"
                />

                <label htmlFor="height">Height:</label>
                <input 
                type="text"
                name="height"
                label="height"
                placeholder="Enter height"
                value={props.height}
                onChange={handleChange}
                className="input"
                />

            <button onClick={submitHandler}>Submit Details</button>
            </form>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        smurfs:state.smurfs,
        isPosting:state.isPosting,
        error:state.error
    }
}

export default connect(mapStateToProps,{postSmurfs})(SmurfsForm)