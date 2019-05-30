

// var data = JSON.parse(localStorage.getItem('text'))
var initialState = {
    isEdit: false
}

var tasks = (state = initialState, action) => {

    switch (action.type) {
        case 'CHANGE_EDIT_STATUS':
            // console.log(action);

            return { ...state, isEdit: !state.isEdit };
        default:
            return state;
    }

};
export default tasks;
