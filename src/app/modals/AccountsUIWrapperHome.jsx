import React, {Component} from 'react';
import Modal from 'react-modal';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-20%',
        transform: 'translate(-50%, -50%)',
        background: 'rgb(0, 0, 0)',
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '30px',
        color: '#e5e5e5',
        width: '400px'
    }
};

const roles =
    [
        'Admin',
        'Chef',
        'Marketing'
    ];
export default class AccountsUIWrapperHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            name: '',
            lastname: '',
            CV: '',
            CVLink: '',
            email: '',
            password: '',
            cpassword: '',
            value:'',
        };

        this.up = false;
    }
    handleChange (event, index, value) {
        this.setState({value});
    }

    menuItems(values) {
        return roles.map((name) => (
            <MenuItem
                key={name}
                insetChildren={true}
                value={name}
                primaryText={name}
            />
        ));
    }

    registerUser(e) {
        e.preventDefault();
        console.log("ENTRO");
        var state = this.state
        var props = this.props;
        if (this.state.password === this.state.cpassword) {
            var formData = {
                nombres: this.state.name,
            apellidos: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            role:this.state.value
        };

            console.log("HEY");
            console.log(formData);

            axios.post("/", formData).then(function () {
                console.log("ok");
                console.log(data)
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            console.log("T P A N T S");
            alert("The passwords are not the same");
        }

    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const {value} = this.state;
        // Just render a placeholder container that will be filled in
        return (
            <div>
                <button id="button" onClick={this.openModal.bind(this)}>Register</button>
                <div>
                    <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal.bind(this)}
                           contentLabel="Register"
                           shouldCloseOnOverlayClick={true} style={customStyles}>
                        <form onSubmit={this.registerUser.bind(this)}>
                            <div className="text-center">
                                <h3>Register</h3>
                            </div>
                            <h5> First Name </h5>
                            <div>
                                <input id="sinput" type="text" value={this.state.name} placeholder="Name" required
                                       onChange={(event) => {
                                           this.setState({name: event.target.value})
                                       }}/>
                            </div>
                            <h5> Last Name </h5>
                            <div>
                                <input id="sinput" type="text" value={this.state.lastname} placeholder="Lastname"
                                       required onChange={(event) => {
                                    this.setState({lastname: event.target.value})
                                }}/>
                            </div>
                            <h5> Email </h5>
                            <div>
                                <input id="sinput" type="email" value={this.state.email} placeholder="Email" required
                                       onChange={(event) => {
                                           this.setState({email: event.target.value})
                                       }}/>
                            </div>
                            <h5> Password </h5>
                            <div>
                                <input id="sinput" type="password" value={this.state.password} placeholder="Password"
                                       required onChange={(event) => {
                                    this.setState({password: event.target.value})
                                }}/>
                            </div>
                            <h5> Confirm Password </h5>
                            <div>
                                <input id="sinput" type="password" value={this.state.cpassword}
                                       placeholder="Confirm Password"
                                       required onChange={(event) => {
                                    this.setState({cpassword: event.target.value})
                                }}/>
                            </div>
                            <h5> Role </h5>
                            <div>
                                <SelectField
                                    multiple={false}
                                    hintText="Select"
                                    value={value}
                                    onChange={this.handleChange.bind(this)}
                                >
                                    {this.menuItems(value)}
                                </SelectField>
                            </div>
                            <div className="row" id="registerButtons">
                                <div id="marginl" className="col-xs text-center">
                                    <button type="button submit" className="btn btn-lg btn-primary"
                                            onClick={this.closeModal.bind(this)}>Close
                                    </button>
                                </div>
                                <div id="marginr" className="col-xs text-center">
                                    <button type="submit" className="btn btn-lg btn-primary">Add
                                    </button>
                                </div>
                            </div>
                        </form>
                    </Modal>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}
