import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';

import { addReminder } from '../../Actions'

class ReminderForm extends Component {
    
    state = {
        reminderText: ''
    }

    handleTextChange = this.handleTextChange.bind(this);
    handleNewReminder = this.handleNewReminder.bind(this);

    handleNewReminder() {
        this.props.addReminder(this.state.reminderText)
    }

    handleTextChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <form>
                <TextField 
                    name="reminderText"
                    label="I need to..."
                    value={this.state.reminderText}
                    fullWidth
                    margin="normal"
                    onChange={event => this.handleTextChange(event)}
                    />
                <Tooltip title="Add reminder">
                    <Button variant="fab" color="secondary" aria-label="add" className="add-btn" onClick={() => this.handleNewReminder()}>
                        <AddIcon />
                    </Button>
                </Tooltip>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {reminders: state}
}

export default connect(mapStateToProps, {addReminder})(ReminderForm);