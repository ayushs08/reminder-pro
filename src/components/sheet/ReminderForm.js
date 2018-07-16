import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';

import { addReminder } from '../../Actions'

class ReminderForm extends Component {
    
    state = {
        reminderText: '',
        reminderDate: '',
        textInvalid: null,
        dateInvalid: null
    }

    handleInputChange = this.handleInputChange.bind(this);
    handleNewReminder = this.handleNewReminder.bind(this);
    validateForm = this.validateForm.bind(this);

    validateForm() {
        if( this.state.reminderText.replace(/ /g, '') === '' ) {
            this.setState({textInvalid: true})
        } else {
            this.setState({textInvalid: false}, () => { this.state.dateInvalid === false && this.handleNewReminder()})
        }
        if( this.state.reminderDate === '' ) {
            this.setState({dateInvalid: true})
        } else {
            this.setState({dateInvalid: false})
        }
    }

    handleNewReminder() {
        this.props.addReminder(this.state.reminderText, this.state.reminderDate)
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <form>
                <TextField 
                    name="reminderText"
                    label="Remind me to..."
                    value={this.state.reminderText}
                    margin="normal"
                    fullWidth
                    className="input-field"
                    error={this.state.textInvalid}
                    onChange={event => this.handleInputChange(event)}
                />
                <TextField
                    name="reminderDate"
                    label="Due Date"
                    type="datetime-local"
                    InputLabelProps = {{shrink: true}}
                    className="input-field"
                    error={this.state.dateInvalid}
                    onChange={event => this.handleInputChange(event)}
                />
                <Tooltip title="Add reminder">
                    <Button variant="fab" color="secondary" aria-label="add" className="add-btn" onClick={() => this.validateForm()}>
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