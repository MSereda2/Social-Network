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

import { connect } from "react-redux";

const App = props => {
  return (
    <BrowserRouter>
      <div className="container">
        <HeaderContainer header={props.header} />
        <NavContainer />
        <div className="container__wraper_page">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogContainer />} />
          <Route path="/Users" render={() => <UsersContainer />} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  header: state.header
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// component={Profile}
// dataMessage={props.store.profile.addPost}
//                      updateInputValue={props.store.profile.updateInputValue}
