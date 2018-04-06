
import Axios from 'axios';


export function SET_CURRENT_PAGE(slag){
    return {
        type: 'SET_CURRENT_PAGE',
        payload: slag
    };
}