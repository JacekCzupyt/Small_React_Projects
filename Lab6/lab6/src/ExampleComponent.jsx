import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return{
        prop: state
    }
}

const mapDispatchToProps = (dispatch) => ({
    Contact: value => dispatch({type: 'AddValue', payload: value})
})


const ExampleComponent = (props) =>{
    return(
        <div>
            <label>{props.prop}</label>
            <button onClick={() => props.Contact("test")}></button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);