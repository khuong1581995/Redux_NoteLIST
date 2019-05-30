export const actAddData = (text) => ({
    type: 'ADD_DATA',
    text
})

export const changeEditStatus = (isEdit) => ({
    type: 'CHANGE_EDIT_STATUS',
    isEdit
})