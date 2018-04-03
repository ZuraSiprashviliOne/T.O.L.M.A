
import React from 'react';
import { connect } from 'react-redux';

import {Loading} from '../../Components/Loading';
import {CheckPromises} from '../../Helpers/Promise';

import '../../Stylesheets/home.css';

class Element extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div
                id={'home'}>
                home page
            </div>
        );
    }
}

class Home extends React.Component{
    constructor(props){
        super(props);

        this.init = this.init.bind(this);
        this.check = this.check.bind(this);
    }
    
    componentWillMount(){
        this.init(this.props);
    }

    init(props){
        if(this.check(props) === false){

        }
    }

    check(props = this.props){
        return CheckPromises(props.Home) !== false;
    }

    render(){
        return this.check() ? <Element {...this.props}/> : <Loading />;
    }
}

const states = (state) => {
    return {
        Home: state.HomeReducer
    };
};

const actions = (dispatch) => {
    return {
    };
};

export default connect(states, actions)(Home)