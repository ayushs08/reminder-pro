import { ADD_REMINDER, DELETE_REMINDER } from './Constants'

export const addReminder = (reminderText) => {
    const action = {
        type: ADD_REMINDER,
        reminderText
    }
    console.log('action in addReminder', action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('action in deleteReminder', action);
    return action;
}