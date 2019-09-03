import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import './LogIn.scss';
import { Button } from '../Button/Button';
import TextField from '@material-ui/core/TextField';
import { authenticate } from '../ApiFunctions/authenticate';
import { getItems } from '../ApiFunctions/getItems';



export class LogIn extends React.Component {
    state = {
        name: '',
        password: '',
        NameError: true,
        PasswordError: true,

    };

    componentDidMount() {
        authenticate('kWeQPqnu', 'tA7HxDVTcU2z')
            .then(token => getItems(token))
            .then(items => console.log('Items: ', items))
            .catch(e => console.log('Error: ', e));
    };


    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name: "",
            password: ""
        });
    };

    handleChangeName = event => {
        this.setState({ name: event.target.value });
        if (event.target.value.length <= 5) {
            this.setState({ NameError: false });
        } else {
            this.setState({ NameError: true });
        }
    };
    handleChangepassword = password => event => {
        this.setState({ [password]: event.target.value });
        if (event.target.value.length <= 5) {
            this.setState({ PasswordError: false });
        } else {
            this.setState({ PasswordError: true });
        }
    };

    render() {

        return (
            <div className="LogIn-section">
                <form className="LogIn-section__form">
                    <p>Please fill text fields.</p>
                    <TextField
                        id="standard-name"
                        label="user_name"
                        className={"text"}
                        value={this.state.name}
                        onChange={this.handleChangeName}
                        margin="normal"
                    />
                    <p hidden={this.state.NameError}>Please insert Your name</p>
                    <TextField
                        id="standard-password"
                        label="password"
                        type="password"
                        className={"password"}
                        value={this.state.password}
                        onChange={this.handleChangepassword('password')}
                        margin="normal"
                    />
                    <p hidden={this.state.PasswordError}>Password should be longer :)</p>

                    <RouterLink to="/logedIn">
                        <Button
                            padding="14px"
                            fontSize="2rem"
                            label="Submit"
                            title="Submit"
                            onClick={e => this.onSubmit(e)}  >
                            Log In</Button></RouterLink>
                </form>
            </div>
        );
    }
}

