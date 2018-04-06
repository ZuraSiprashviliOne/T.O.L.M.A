
import React from 'react';
import {connect} from 'react-redux';

class About extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div
                className={'page'}
                id={'about'}>
                about page
            </div>
        );
    }
}

const states = (state) => {
    return {

    };
};
const actions = (dispatch) => {
    return {

    };
};

export default connect(states, actions)(About);