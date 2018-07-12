import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';

import './ReminderList.css'

const ReminderList = () => {
    return (
        <div className="ReminderList">
            <Grid container md={10} direction="row" justify="center" className="reminders"> 
                <div className="clear-all">
                <Button variant="fab" color="primary" aria-label="add" className="add-btn">
                    <DoneAllIcon />
                </Button>
                </div>
                <Grid item>
                    <Paper className="list-item">
                        <div className="the-remidner">Check</div>
                        <div className="action">
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                            <IconButton>
                                <DoneIcon />
                            </IconButton>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default ReminderList;