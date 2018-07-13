import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import './Sheet.css'

const ReminderForm = ({ handleTextChange, reminderText }) => {
    return (
        <form>
            <TextField 
                name="reminderText"
                label="I need to..."
                value={reminderText}
                fullWidth
                margin="normal"
                onChange={event => handleTextChange(event)}
            />
            <Tooltip title="Add reminder">
                <Button variant="fab" color="secondary" aria-label="add" className="add-btn">
                    <AddIcon />
                </Button>
            </Tooltip>
        </form>
    )
}

const Sheet = ({ handleTextChange, reminderText }) => {

    return (
        <div className="Sheet">
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={6}>
                    <Paper className="paper">
                        <h1 className="sheet-title">Reminder Pro</h1>
                        <ReminderForm handleTextChange={handleTextChange} reminderText={reminderText}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default Sheet;