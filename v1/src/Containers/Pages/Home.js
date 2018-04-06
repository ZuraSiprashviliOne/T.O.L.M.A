
import React from 'react';
import { connect } from 'react-redux';

import Components from '../../Components/Home/Components';

import {SET_HOME_SECTIONS} from '../../Actions/HomeActions';

import {Scrollbar} from '../../Components/Scrollbar';
import Swiper from 'react-id-swiper';

import {CheckPromises} from '../../Helpers/Promise';
import {Loading} from '../../Components/Loading';

import '../../Stylesheets/home.css';

class Element extends React.Component{
    constructor(props){
        super(props);

        this.GetSections = this.GetSections.bind(this);
    }

    GetSections(){
        return this.props.Home.sections.map((section) => {
            let name = section.name[0].toUpperCase() + section.name.substr(1);
            let Component = Components[name];
            return (
                <div
                    key={`section_${name}`}>
                    <Scrollbar>
                        <Component Home={this.props.Home} {...section}/>
                    </Scrollbar>
                </div>
            );
        });
    }

    render(){
        return (
            <div
                className={'page'}
                id={'home'}>
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true
                    }}>
                    {this.GetSections()}
                </Swiper>
            </div>
        );
    }
}

class Home extends React.Component{
    constructor(props){
        super(props);

        this.Init = this.Init.bind(this);
        this.Check = this.Check.bind(this);
    }
    
    componentWillMount(){
        this.Init(this.props);
    }

    Init(props){
        if(this.Check(props) === false){
            props.setSections();
        }
    }

    Check(props = this.props){
        return CheckPromises(props.Home) !== false;
    }

    render(){
        return this.Check() ? <Element {...this.props}/> : <Loading />;
    }
}

const states = (state) => {
    return {
        Home: state.HomeReducer
    };
};

const actions = (dispatch) => {
    return {
        setSections: () => {
            dispatch(SET_HOME_SECTIONS());
        }
    };
};

export default connect(states, actions)(Home)