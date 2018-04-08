
import React from 'react';
import {connect} from 'react-redux';

class Element extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
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

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <Element />;
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

export default connect(states, actions)(Home);