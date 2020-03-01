// REACT BASE
import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

// REACT COMPONENTS
import HeaderContainer from "./components/header/HeaderContainer";
import NavContainer from "./components/navigation/navContainer";
import ProfileContainer from "./components/pages/profile/ProfileContainer.component";
import DialogContainer from "./components/pages/dialogs/DialogContainer";
import UsersContainer from "./components/pages/Users/UserContainer";
import Music from "./components/pages/music/Music.component";
import Settings from "./components/pages/settings/Settings.component";
import Login from "./components/pages/login/Login";

import { connect } from "react-redux";

import {AuthThunkCreator} from './redux/reducers/auth/auth_thunk';
import {initializeApp} from './redux/reducers/app/app.thunk';


class App extends React.Component {

  componentDidMount = () => {
    this.props.initializeApp()
}


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <HeaderContainer header={this.props.header} />
          <NavContainer />
          <div className="container__wraper_page">
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <DialogContainer />} />
            <Route path="/Users" render={() => <UsersContainer />} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
            <Route path="/login" render={() => <Login />}  />
          </div>
        </div>
      </BrowserRouter>
    );
  }
  
};

const mapStateToProps = state => ({
  header: state.header,
  initialized : state.app.initialed
});


export default connect(mapStateToProps, {initializeApp})(App);

