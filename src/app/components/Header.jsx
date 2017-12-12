import React, {Component} from 'react';

export default class Header extends Component {

    singOut() {

        this.forceUpdate();

    }


    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
                <a href="/" id="navbar-brand" className="navbar-brand" >
                    <img
                        className="logo"
                        src="../../public/logo.png"
                        alt="logo"/>
                </a>
                {this.props.user ?
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> : <div></div>
                }

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav nav ml-auto">
                        {this.props.user ?
                            <li className="nav-item"><a  className="nav-link" id="navbar-list"  href="/platos"
                                                              >Platos</a>
                            </li>
                            : <div></div>
                        }
                        {this.props.user ?
                            <li className="nav-item"><a  className="nav-link" id="navbar-list"  href="/portafolios"
                                                               >Portafolios</a>
                            </li>
                            : <div></div>
                        }
                        {this.props.user ?
                            <li className="nav-item" ><a  className="nav-link" href="/" id="navbar-list">Sign Out</a></li>:
                            <div></div>
                        }

                    </ul>
                </div>
            </nav>
        );
    }

}

