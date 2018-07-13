import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './Sheet.css'
import ReminderForm from './ReminderForm'

const Sheet = () => {

    return (
        <div className="Sheet">
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={6}>
                    <Paper className="paper">
                        <h1 className="sheet-title">Reminder Pro</h1>
                        <ReminderForm />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Sheet;