import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Profile from './components/Profile'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: [],
      followersProfile: []
    };
  }

  componentDidMount() {
    console.log("component did mount is working");
    axios 
    .get("https://api.github.com/users/venegasgabby76")
    .then((response) => {
      this.setState({profile: response.data})
      console.log("you have friends", this.state);
    })
    .catch((error) =>
    console.log("no one likes you", error))
  }


  render() {
    return (
      <div className="cards">
        <Profile profile={this.state.profile}/>
        <p>this is just some dumb stuff written </p>
      </div>
    )
  }
}

export default App;