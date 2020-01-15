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

const App = (props) => {
 
    return(
        <BrowserRouter>
            <div className="container">
                <Header state={props.store.getState().header} />
                <NavContainer state={props.store.getState().navbar} />
                <div className="container__wraper_page">
                    <Route path="/profile" render={() => (<Profile store={props.store} />)} />
                    <Route path="/dialogs" render={() => (<Dialogs store={props.store} />)} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

// component={Profile}
// dataMessage={props.store.profile.addPost}
//                      updateInputValue={props.store.profile.updateInputValue}