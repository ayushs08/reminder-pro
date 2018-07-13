import { ADD_REMINDER, DELETE_REMINDER, CLEAR_ALL } from './Constants'

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
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

export const clearAllReminders = () => {
    const action = {
        type: CLEAR_ALL
    }
    console.log('clearing')
    return action;
}