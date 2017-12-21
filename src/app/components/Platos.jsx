import React, {Component} from 'react';
import AccountsUIWrapperHome from '../modals/AccountsUIWrapperHome.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Platos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            user:''
        };

        this.up = false;
    }

    componentWillMount(){


    }
    login(history) {

    }

    render() {
        //console.log(this.state)
        //console.log(this.state)


        return (
            <div>
                <h1>AQUI VAN LOS PLATOS</h1>
            </div>

        );
    }
}
