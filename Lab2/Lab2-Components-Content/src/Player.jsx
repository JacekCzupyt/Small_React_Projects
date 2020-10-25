import React from 'react'

class Player extends React.Component{
  constructor(props){
    super(props);
    //this.state = {playerName:""};
  }

  render(){
    return(
      <div style={{marginBottom:"10px"}}>
        <table style={{border:"1px solid black"}} width="100%" >
            <td>
              <header>Player {this.props.playerTitle}</header>
              <label>Name: {this.props.PlayerName}</label>
              <br/>
              <label>Number of times played: {this.props.GameCount}</label>
            </td>
            <td style={{verticalAlign:"bottom", textAlign:"right"}}>
              <button style={{width:"100px"}} onClick={(e) => this.props.ChangePlayerHook(e, this.props.playerEnum)} 
                disabled={this.props.CurrentPlayer == this.props.playerEnum}>
                  {this.props.CurrentPlayer == this.props.playerEnum ? "This user is playing now" : "Play"}
              </button>
            </td>
        </table>
      </div>
    )
  }
}

export default Player