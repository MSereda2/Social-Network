// REACT BASE
import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'


// REACT COMPONENTS
import Header from './components/header/Header.component';
import Nav from './components/navigation/Nav.component';
import Profile from './components/pages/profile/Profile.component'
import Dialogs from './components/pages/dialogs/Dialogs.component'
import News from './components/pages/news/News.component';
import Music from './components/pages/music/Music.component';
import Settings from './components/pages/settings/Settings.component'



const App = () => {
    
    return(
        <BrowserRouter>
            <div className="container">
                <Header />
                <Nav />
                <div className="container__wraper_page">
                    <Route path="/profile" component={Profile} />
                    <Route path="/dialogs" component={Dialogs} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;