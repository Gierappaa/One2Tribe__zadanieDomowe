import React from 'react';
import './LogedIn.scss';
import { Button } from '../Button/Button';
import TextField from '@material-ui/core/TextField';
import { authenticate } from '../ApiFunctions/authenticate';
import { getItems } from '../ApiFunctions/getItems';
import { postItem } from '../ApiFunctions/postItem';

export class LogedIn extends React.Component {
    state = {
        tekst: '',
        tekstError: true,
    };

    componentDidMount() {
        authenticate('kWeQPqnu', 'tA7HxDVTcU2z')
            .then(token => getItems(token))
            .then(items => console.log('Items: ', items))
            .catch(e => console.log('Error: ', e));
    }

    sendItems = e => {
        console.log('Im going in...');
        e.preventDefault();
        authenticate('kWeQPqnu', 'tA7HxDVTcU2z')
            .then(token => postItem(token, this.state.tekst))
            .then(res => console.log('ITS WORKING!: ', res))
            .catch(e => console.log('Error: ', e));
    }


    handleChangeText = event => {
        this.setState({ tekst: event.target.value });
        console.log('this.state.tekst: ', this.state.tekst)
        if (event.target.value.length <= 5) {
            this.setState({ tekstError: false });
        } else {
            this.setState({ tekstError: true });
        }
    };

    render() {

        return (
            <div className="LogedIn-section">
                <form className="LogedIn-section__form">
                    <TextField
                        id="standard-text"
                        label="user_text"
                        className={"text"}
                        onChange={this.handleChangeText}
                        value={this.state.tekst}
                        margin="normal"
                    />
                    <p hidden={true}>Write something here longer than 4 letters.</p>
                  
                    <div onClick={e => this.sendItems(e)}>                    
                    <Button
                        disabled={this.state.tekstError}
                        padding="14px"
                        label="Submit"
                        title="Submit"
                        fontSize="2rem"
                        onClick={e => this.sendItems(e)}>
                        Send Text</Button>
                        </div>
                    <p>Hello, You are logged In!</p>
                </form>
            </div>
        );
    }
}

