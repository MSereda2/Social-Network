// REACT BASE
import React from 'react';
import './App.css';


// REACT COMPONENTS
import Header from './components/header/Header.component';
import Nav from './components/navigation/Nav.component';
import Profile from './components/profile/Profile.component';
import Dialogs from './components/pages/dialogs/Dialogs.component'


const App = () => {
    
    return(
        <div className="container">
           <Header />
           <Nav/>
           <div className="container__wraper_page">
                {/* <Profile /> */}
                <Dialogs />
           </div>
        </div>
    )
}

export default App;