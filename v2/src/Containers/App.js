
import React from 'react';
import { connect } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    // Link
} from 'react-router-dom';

import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'aos/dist/aos.css';
import 'react-id-swiper/src/styles/css/swiper.css';
import '../Stylesheets/bootstrap.css';
import '../Stylesheets/style.css';

// import AOS from 'aos';
// import {Loading} from '../Components/Loading';

import Pages from './Pages';

import {NotFound} from '../Components/NotFound';
import { Scrollbar } from '../Components/Scrollbar';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // AOS.init();
    }
    
    render(){
        return (
            <div
                id={'app'}>
                <Router>
                    <div
                        id={'routerContainer'}>
                        <Scrollbar>
                            <Switch>

                                <Route
                                    path={'/'}
                                    exact={true}
                                    component={() => 
                                        <Redirect to={'/pages/home_page'}/>
                                    }/>
                                    
                                <Route
                                    path={'/pages/home_page'}
                                    exact={true}
                                    component={Pages.Home}/>
                                    
                                <Route
                                    component={NotFound}/>

                            </Switch>
                        </Scrollbar>
                    </div>
                </Router>
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

export default connect(states, actions)(App);