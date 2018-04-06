
import React from 'react';
import { connect } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from 'react-router-dom';

import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'aos/dist/aos.css';
import 'react-id-swiper/src/styles/css/swiper.css';
import '../Stylesheets/bootstrap.css';
import '../Stylesheets/style.css';

// import AOS from 'aos';
// import {Loading} from '../Components/Loading';

import {NotFound} from '../Components/NotFound';
import Pages from './Pages';

class App extends React.Component{
    constructor(props){
        super(props);

        this.GetPage = this.GetPage.bind(this);
    }

    componentDidMount(){
        // AOS.init();
    }

    GetPage(match){
        let Page = Pages.find((page) => page.slag === match.params.page);
        let ResultPage = Page ? Page.page : NotFound;
        return <ResultPage match={match}/>
    }
    
    render(){
        return (
            <div
                id={'app'}>
                <Router>
                    <div
                        id={'routerContainer'}>
                        <Link to={'/pages/home_page'}>home</Link>
                        <Link to={'/pages/about_page'}>about</Link>
                        <Switch>
                            <Route
                                path={'/'}
                                exact={true}
                                component={() => <Redirect to={'pages/home_page'}/>}/>
                            <Route
                                path={'/pages/:page'}
                                exact={true}
                                component={({match}) => this.GetPage(match)}/>
                            <Route
                                component={NotFound}/>
                        </Switch>
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