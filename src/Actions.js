import { ADD_REMINDER } from './Constants'

export const addReminder = (reminderText) => {
    const action = {
        type: ADD_REMINDER,
        reminderText
    }
    console.log('action in addReminder', action);
    return action;
}