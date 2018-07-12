import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import './Sheet.css'

const ReminderForm = () => {
    return (
        <form>
            <TextField 
                id="reminder"
                label="I need to..."
                fullWidth
                margin="normal"
            />
            <Button variant="fab" color="secondary" aria-label="add" className="add-btn">
                <AddIcon />
            </Button>
        </form>
    )
}

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