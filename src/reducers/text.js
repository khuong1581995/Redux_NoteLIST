

var data = JSON.parse(localStorage.getItem('text'))
var initialState = data ? data : []

var text = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_DATA':
            let note = {
                noteTitle: action.text.noteTitle,
                noteContent: action.text.noteContent
            }
            const newState = [...state, note]
            // console.log(action)
            localStorage.setItem('text', JSON.stringify(newState))
            return newState
        case 'EDIT_DATA':
            // console.log(action);

            localStorage.setItem('text', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }

};
export default text;
