import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Home from './Home.jsx'
import Header from "./Header.jsx";
import Platos from "./Platos.jsx";
export default class App extends Component {
    render() {
        console.log(this.props)
        const { path } = this.props;

        return (
            <div>
                <Header user ={this.props.user}/>
                {path === "Home"?
                    <Home user = {this.props.user}/>: <div></div>
                }
                {path === "Platos"?
                    <Platos user = {this.props.user}/>: <div></div>
                }
                {path === "Ingredients"?
                    <Home user = {this.props.user}/>: <div></div>
                }

            </div>

        );
    }
}

App.propTypes = {
    path: PropTypes.string.isRequired
};
