import store from './redux/state';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const renderEntireTree = (store) => {
    ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch.bind(store)}  />, document.getElementById('root'));
}

renderEntireTree(store);

store.subcriber(renderEntireTree); // pattern observer























// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// NavData={NavData} friendsItem={FriendsItemData} ItemMessagesFriend={ItemMessagesFriend} ItemMessagesUser={ItemMessagesUser} PostData={PostData}


