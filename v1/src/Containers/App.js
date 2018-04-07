
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

import Pages from './Pages';

import {Loading} from '../Components/Loading';

import {SET_CURRENT_PAGE} from '../Actions/NavigationActions';
import { Scrollbar } from '../Components/Scrollbar';

class App extends React.Component{
    constructor(props){
        super(props);

        this.GetPage = this.GetPage.bind(this);
        this.GetRoutes = this.GetRoutes.bind(this);
    }

    componentDidMount(){
        // AOS.init();
    }

    GetPage(slag){
        let Page = Pages.find((page) => page.slag === slag) || Pages.find((page) => page.slag === 'not_found');
        
        if(this.props.Navigation.page.current !== slag){
            this.props.setCurrentPage(slag);
        }
        return <Page.page/>;
    }

    GetRoutes(){
        return Pages.map((page) => {
            return <Route
                key={page.slag}
                path={`/pages/${page.slag}`}
                exact={true}
                component={() => this.GetPage(page.slag)}/>;
        });
    }
    
    render(){
        return (
            <div
                id={'app'}>
                <Router>
                    <div
                        id={'routerContainer'}>
                        {/* <Link to={'/pages/home_page'}>home</Link>
                        <Link to={'/pages/about_page'}>about</Link> */}
                        <Scrollbar>
                            <Switch>
                                <Route
                                    path={'/'}
                                    exact={true}
                                    component={() => <Redirect to={'pages/home_page'}/>}/>
                                {/* <Route
                                    path={'/pages/:page'}
                                    exact={true}
                                    component={({match}) => this.GetPage(match)}/> */}
                                        {this.GetRoutes()}
                                <Route
                                    component={Pages.find((page) => page.slag === 'not_found').page}/>
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
        Navigation: state.NavigationReducer
    };
};
const actions = (dispatch) => {
    return {
        setCurrentPage: (slag) => {
            dispatch(SET_CURRENT_PAGE(slag));
        }
    };
};

export default connect(states, actions)(App);