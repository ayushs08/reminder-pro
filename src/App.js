import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from './components/header/Header'
import ReminderList from './components/reminderList/ReminderList'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#61D0FF',
            main: '#2e9de3',
            dark: '#006AB0',
            contrastText: '#fff'
        },
        secondary: {
            light: '#FF6F6F',
            main: '#EF3C3C',
            dark: '#BC0909',
            contrastText: '#fff'
        }
    }
});

class App extends Component {

    state = {
        reminderText: ''
    }

    handleTextChange = this.handleTextChange.bind(this)

    handleTextChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Header handleTextChange={this.handleTextChange} reminderText={this.state.reminderText}/>
                    <ReminderList />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
