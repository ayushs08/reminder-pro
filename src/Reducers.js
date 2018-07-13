import { ADD_REMINDER, DELETE_REMINDER } from './Constants'

const reminder = ({ text, dueDate }) => {
    return {
        id: Math.random(),
        text,
        dueDate
    }
}

const removeById = (state=[], id) => {
    const reminders = state.filter(reminder => reminder.id !== id)
    console.log('new reduced reminders', reminders);
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders as state (add) ', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            return reminders;
        default: 
            return state;
    }
}

export default reminders;