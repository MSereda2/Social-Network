import AppTypes from './app.types';

const initialState = {
    initialed: false,
}

let appReducer = (state = initialState, action) => {
    switch(action.type) {
        case AppTypes.SET_INITIALED:
            return{
                ...state,
                initialed: true
            }
        default: return state;
    }
}

export default appReducer;