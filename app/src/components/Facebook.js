import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
        isLoggedIN: false,
        userID:'',
        name:'',
        email:'',
        picture: ''
    }

    responseFacebook = response => {
        this.setState({
            isLoggedIN: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    }

    render() {
        let fbContent;
        if (this.state.isLoggedIN){
            fbContent = (
                <div style={{
                    width: "350px",
                    display: "auto",
                    background: "#f4f4f4",
                    padding: "20px",
                    position: "relative"
                }}
                >
                    <img src={this.state.picture} alt = {this.state.name} 
                        style={{height: "50px", position: "absolute", left:"0.5rem"
                        }}
                    />
                    <h4> Seja bem-vindo, {this.state.name}!</h4>
                    Email: {this.state.email}
                </div>
            );
        }else{
            fbContent = (<FacebookLogin
                appId="1609477745887906"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                />
            );
        }

        return <div class = "fbContent">{fbContent}</div>
    }
}