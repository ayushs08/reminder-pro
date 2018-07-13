import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

import './ReminderList.css'

const ReminderList = () => {
    return (
        <div className="ReminderList">
            <Grid container direction="row" justify="center" className="reminder-container"> 
                <div className="clear-all">
                <Tooltip title="Clear All">
                    <Button variant="fab" color="primary" aria-label="add" className="add-btn">
                        <DoneAllIcon />
                    </Button>
                </Tooltip>
                </div>
                <Grid item>
                    <Paper className="list-item">
                        <div className="the-remidner">Check</div>
                        <div className="action">
                            <Tooltip title="Edit">
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Done">
                                <IconButton>
                                    <DoneIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default ReminderList;