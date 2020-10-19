import React from 'react'

class NameInputField extends React.Component{
    constructor(props){
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event){
      this.props.onChangeMethod(event, this.props.enumPlayer);
    }
  
    render(){
      return(
        <label style={{display:"flex"}}>
          Set name of player {this.props.playerTitle}:
            <input type="text" name="PlayerOneName" style={{flex:1, marginLeft:"5px"}} onChange={this.handleChange}/>
          </label>
      )
    }
  }

export default NameInputField
  