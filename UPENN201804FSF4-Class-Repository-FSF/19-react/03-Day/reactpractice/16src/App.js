import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component{
  state = {
    friendList: friends
  }
  
  
  clickHandler = (e) => {

    const letList = this.state.friendList.filter(friend => {
        if(friend.id !== parseInt(e.target.getAttribute("data-id"))){
          return true}
        }
      )

    this.setState({friendList: letList})
  };
  
  
  render() {
    return (
      <div>
        {console.log(this.state)}
        <Wrapper />
        <h1 className="title">Friends List</h1>

        {this.state.friendList.map(friend => 
          <FriendCard 
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            id={friend.id}
            onClick = {this.clickHandler}
          />
        )}
        <Wrapper />
      </div>
    )
  }

}
export default App;
