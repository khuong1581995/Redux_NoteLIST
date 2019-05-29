
var initialState = {
    testConnect: ' test ket noi'
}

var text = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_DATA':
            var text = {

                title: action.text.title,
                content: action.text.content
            }


            return state

        default: return state;
    }

};
export default text;
