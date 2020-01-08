// REACT BASE
import React from 'react';
import './App.css';


// REACT COMPONENTS
import Header from './components/header/Header.component';
import Nav from './components/navigation/Nav.component';
import Profile from './components/profile/Profile.component';


const App = () => {
    
    return(
        <div className="container">
           <Header />
           <Nav/>
           <Profile />
        </div>
    )
}

export default App;