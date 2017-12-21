import React, {Component} from 'react';
import AccountsUIWrapperHome from '../modals/AccountsUIWrapperHome.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Home extends Component {

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
            <div className="home">
                <div className="home text-center  " >

                    <div className=" home bajar text-center">
                        <h1 >Bienvenido a Catarte </h1>
                        <h2> Registrate para ver nuestros podructos</h2>
                    </div>
                    <div>
                        <form action="/" method="post"className="loginform inner">
                            <div>
                                <label><b>Email</b></label>
                                <input name ="logemail" id="sinput" type="text" placeholder="Enter Email"
                                       onChange={(event)=>{
                                           this.setState({
                                               email:event.target.value,
                                           })
                                       }} required/>

                                <label><b>Password</b></label>
                                <input name="logpassword"id="sinput" type="password" placeholder="Enter Password"
                                       onChange={(event)=>{
                                           this.setState({
                                               password:event.target.value,
                                           })
                                       }} required/>
                                <div className="row">
                                    {(this.props.user && this.props.user.role === "Admin")?
                                        <div id="marginl" className="col-xs-3">
                                            <MuiThemeProvider>
                                                <AccountsUIWrapperHome />
                                            </MuiThemeProvider>
                                        </div>: <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;</div>
                                    }
                                    <div id="marginr"className="col-xs-3">
                                        <input type="submit" value=" Sign In"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}
