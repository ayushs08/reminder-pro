import React from 'react';
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

const App = () => {
    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <Header />
                <ReminderList />
            </MuiThemeProvider>
        </div>
    )
}

export default App;
