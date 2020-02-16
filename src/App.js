// REACT BASE
import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';


// REACT COMPONENTS
import Header from './components/header/Header.component';
import NavContainer from './components/navigation/navContainer';
import Profile from './components/pages/profile/Profile.component'
import Dialogs from './components/pages/dialogs/Dialogs.component'
import News from './components/pages/news/News.component';
import Music from './components/pages/music/Music.component';
import Settings from './components/pages/settings/Settings.component'

import {connect} from 'react-redux'

const App = (props) => {
 
    return(
        <BrowserRouter>
            <div className="container">
                <Header header={props.header}/>
                <NavContainer navbar={props.navbar}/>
                <div className="container__wraper_page">
                    <Route path="/profile" render={() => (<Profile />)} />
                    <Route path="/dialogs" render={() => (<Dialogs />)} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => ({
    header: state.header,
    navbar: state.navbar,

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);

// component={Profile}
// dataMessage={props.store.profile.addPost}
//                      updateInputValue={props.store.profile.updateInputValue}