import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';

import { deleteReminder } from '../../Actions'
import './ReminderList.css'

const Reminder = ({ reminderText, handleDoneReminder, id }) => {
    return (
        <Grid item>
            <Paper className="list-item">
                <div className="the-remidner">{reminderText}</div>
                <div className="reminder-action">
                    <Tooltip title="Edit">
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Done">
                        <IconButton >
                            <DoneIcon onClick={() => handleDoneReminder(id)}/>
                        </IconButton>
                    </Tooltip>
                </div>
            </Paper>
        </Grid>
    )
}

const ReminderList = ({ reminders, ...props }) => {

    const handleDoneReminder = (id) => {
        props.deleteReminder(id)
    }

    const renderReminder = reminders.map( reminder => <Reminder reminderText={reminder.text} key={reminder.id} id={reminder.id} handleDoneReminder={handleDoneReminder}/> );

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
                {renderReminder}
            </Grid>
        </div>
    )
}

function mapStateToProps(state) {
    return {reminders: state}
}

export default connect(mapStateToProps, { deleteReminder })(ReminderList);