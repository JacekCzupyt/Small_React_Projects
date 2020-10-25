import React from 'react'
import Player from './Player'
import NameInputField from './NameInputField'

class GameAdmin extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        PlayerNames: ["", "", ""],
        CurrentActivePlayer:-1,
        PlayerGameCounts: [0, 0, 0]
      }
  
      this.OnNameChange = this.OnNameChange.bind(this);
      this.ChangeActivePlayer = this.ChangeActivePlayer.bind(this);
    }
  
    OnNameChange(e, playerEnum)
    {
      let items = this.state.PlayerNames;
      items[playerEnum] = e.target.value;
      this.setState({PlayerNames: items});
      //console.log('name changed', playerEnum, e.target.value);
    }
  
    ChangeActivePlayer(e, playerEnum)
    {
      this.setState({CurrentActivePlayer:playerEnum});
      //console.log('player changed', playerEnum);
  
      let items = this.state.PlayerGameCounts;
      items[playerEnum] += 1;
      this.setState({PlayerGameCounts: items});
    }
  
  
  
    render(){
      return(
        <div style={{minWidth:"400px"}}>
          <Player playerTitle="One" playerEnum={0} name="PlayerOne" ChangePlayerHook={this.ChangeActivePlayer}
            PlayerName={this.state.PlayerNames[0]} CurrentPlayer={this.state.CurrentActivePlayer} GameCount={this.state.PlayerGameCounts[0]}/>
  
          <Player playerTitle="Two" playerEnum={1} name="PlayerTwo" ChangePlayerHook={this.ChangeActivePlayer}
            PlayerName={this.state.PlayerNames[1]} CurrentPlayer={this.state.CurrentActivePlayer} GameCount={this.state.PlayerGameCounts[1]}/>
  
          <hr/>
  
          <NameInputField playerTitle="one" enumPlayer={0} onChangeMethod={this.OnNameChange} />
          <NameInputField playerTitle="two" enumPlayer={1} onChangeMethod={this.OnNameChange} />
        </div>
      )
    }
}

export default GameAdmin