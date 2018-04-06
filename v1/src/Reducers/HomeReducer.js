
const HomeReducer = (state = {
    sections: null
}, action) => {
    switch(action.type){
        case 'SET_HOME_SECTIONS_FULFILLED': {
            state = {
                ...state,
                sections: action.payload
            };
            break;
        }
        default: {

            break;
        }
    }

    return state;
};

export default HomeReducer;