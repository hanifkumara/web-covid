const initialUser = {
  name: 'Hanif Kumara',
  hobbuy: 'Swimming'
}

const userReducer = (state= initialUser, action) => {
  if (action.type === 'SET_USER') {
    console.log(action.payload);
    return {
      ...state,
      name: action.payload
    }
  } else {
    return state
  }
}

export default userReducer