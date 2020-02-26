import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export const withAuthRedirect = (Component) => {

   let RedirectComponent = (props) => {
       if(!props.isAuth) { return <Redirect to={'/login'} /> }
       return( <Component {...props} /> )
   }

   let ConnectedAuthRedirectComponent = connect(MapStateToPropsForRedirect, {})(RedirectComponent)


   return ConnectedAuthRedirectComponent;
}

const MapStateToPropsForRedirect = (state) => ({
    isAuth: state.authRedusers.isAuth
})
