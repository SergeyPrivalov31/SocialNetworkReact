const ADD_USER = 'ADD-USER';
const UPDATE_NEW_USER_NAME = 'UPDATE-NEW-USER-NAME'

const usersReducer = (state, action) => {

    //Меняем конструкцию if else на switch case . жмём на if и дальше replace if with switch

    switch (action.type) {
        case ADD_USER:
            let newUser = {
                id: 1,
                name: state.newUserName
            };
            state.users.push(newUser);
            state.newUserName = '';
            return state;
        case UPDATE_NEW_USER_NAME:
            state.newUserName = action.newUserName;
           return state;
        default:
            return state;
    }
}
export default usersReducer;