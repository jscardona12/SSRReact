import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class App extends Component {
    render() {
        const { isMobile } = this.props;

        return (
            <div>
                <form action="/" method="post">
                    <input type="text" name="logemail" placeholder="E-mail" required=""/>
                    <input type="password" name="logpassword" placeholder="Password" required=""/>
                    <div class="tp">
                        <input type="submit" value="LOGIN NOW"/>
                    </div>
                </form>
            </div>
        );
    }
}

App.propTypes = {
    isMobile: PropTypes.bool.isRequired
};
