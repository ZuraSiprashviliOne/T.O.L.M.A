
import Axios from 'axios';

export function SET_HOME_SECTIONS(){
    return {
        type: 'SET_HOME_SECTIONS',
        payload: new Promise((resolve, reject) => {
            Axios.get('http://localhost/tolma/json.php', {
                params: {
                    json: 'home_sections'
                }
            })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }
}