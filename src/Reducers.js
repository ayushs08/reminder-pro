import { ADD_REMINDER } from './Constants'

const reminder = (action) => {
    return {
        text: action.reminderText,
        id: Math.random()
    }
}

const reminders = (state = [], action) => {
    let reminders = null;
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders as state', reminders);
            return reminders;
        default: 
            return state;
    }
}

export default reminders;