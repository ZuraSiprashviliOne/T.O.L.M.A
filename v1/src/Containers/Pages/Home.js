
import React from 'react';
import { connect } from 'react-redux';


class Home extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(){
        return (
            <div 
                id={'home'} 
                className={'page'}>
                home page
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

export default connect(states, actions)(Home)