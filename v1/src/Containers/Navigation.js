
import React from 'react';
import {connect} from 'react-redux';


class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id={'navigation'}>
                navigation
            </div>
        );
    }
}

const states = (state) => {
    return {

    };
};

const dispatches = (state) => {
    return {

    };
};

export default connect(states, dispatches)(Navigation);