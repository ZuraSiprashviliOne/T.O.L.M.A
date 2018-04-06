
const navigationReducer = (state = {
    page: {
        current: null
    }
}, action) => {
    
    switch(action.type){
        
        case 'SET_CURRENT_PAGE': {
            state = {
                ...state,
                page: {
                    ...state.page,
                    current: action.payload
                }
            };
            break;
        }

        default: {
            break;
        }
    }

    return state;
};

export default navigationReducer;