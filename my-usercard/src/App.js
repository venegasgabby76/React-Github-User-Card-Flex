import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: [],
      followersFriends: ""
    };
  }

  componentDidMount() {
    console.log("Component is mounting");
    axios
      .get("https://api.github.com/users/venegasgabby76")
      .then((response) => {
        console.log("response", response);
        this.setState({ users: response.data });
      })
      .catch((error) => console.log(error))
      .then(
        axios
          .get(`https://api.github.com/users/venegasgabby76/followers`)
          .then((response) => {
            this.setState({ followers: response.data });
            console.log("folower response", response);
          })
          .catch((error) => console.log(error))
      );
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.followers !== this.state.followers) {
      console.log("users have changed");
    }
    if (prevState.followersFriends !== this.state.followersFriends) {
      console.log("followers are updating", this.state.followersFriends);
    }
  }

  fetchFriends = () => {
    axios
      .get(`https://api.github.com/users/${this.state.followersFriends}/followers`)
      .then((res) => {
        this.setState({ followers: res.data.message });
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    console.log("handleChnage called")
    this.setState({
      // ... === take the whole previous state
      ...this.state,
      followersFriends: e.target.value,
    });
  };
  render() {
    // console.log(users);
    console.log("Followers", this.state.followers);
    return (
      <div className="App">
        <h1>GitHub Usercard</h1>
        <input
          type="text"
          value={this.state.followersFriends}
          onChange={this.handleChange}
        />
        <button onClick={this.fetchFriends}>Fetch Users</button>
        <div className="users">
          <h1>{this.state.users.name}</h1>
          <img width="250" className="user" src={this.state.users.avatar_url} />
          <p>{this.state.users.login}</p>
          <p>Bio: {this.state.users.bio}</p>
          <a href={this.state.users.html_url}>Go to Profile</a>

          <h2>Followers</h2>
          {this.state.followers.map((follow) => {
            return (
              <div className='followers'>
                <h3>{follow.login}</h3>
                <img width="200" src={follow.avatar_url} />
                <p>{follow.html_url}</p>
                <a href={follow.html_url}>Go to Profile</a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;