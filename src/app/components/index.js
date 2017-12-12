import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Home from './Home.jsx'
import Header from "./Header.jsx";
export default class App extends Component {
    render() {
        console.log(this.props)
        const { isMobile } = this.props;

        return (
            <div>
                <Header/>
                <Home isMobile={ isMobile} user = {this.props.user}/>
            </div>

        );
    }
}

App.propTypes = {
    isMobile: PropTypes.bool.isRequired
};
