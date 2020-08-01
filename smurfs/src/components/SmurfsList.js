import React,{useEffect} from 'react';
import SmurfsCard from './SmurfsCard';
import {fetchSmurfs} from '../actions/actions';
import {connect} from 'react-redux';

const SmurfsList=(props)=>{
    useEffect(()=>{
        props.fetchSmurfs()
    },[])
    return(
        <div>
            {props.smurfs.map(smurf=>(<SmurfsCard key={smurf.id} smurf={smurf}/>))}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        smurfs:state.smurfs,
        isFetching:state.isFetching,
        error:state.error
    }
}

export default connect(mapStateToProps,{fetchSmurfs})(SmurfsList)