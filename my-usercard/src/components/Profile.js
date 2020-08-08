import React from 'react';

class Profile extends React.Component {

    render() {
        return (
            <div className='profile'>
                <img width="350px" src={this.props.profile.avatar_url} alt='gabby-venegas' className='profile-img'/>
                <h2>{this.props.profile.name}</h2>
                <p>{this.props.profile.login}</p>
                <p>{this.props.profile.html_url}</p>
                <p>{this.props.profile.about}</p>
                <p>{this.props.profile.location}</p>
                <p>Followers:{this.props.profile.followers}</p>
                <p>Following:{this.props.profile.following}</p>
            </div>
        )
    }
}

export default Profile;