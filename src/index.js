import state from './redux/state';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, updateInputValue, sendMessage, updateMessageInput, subcriber} from './redux/state';


const renderEntireTree = (state) => {
    ReactDOM.render(<App state={state} messageData={addPost} updateInputValue={updateInputValue} sendMessage={sendMessage} updateMessageInput={updateMessageInput}  />, document.getElementById('root'));
}
renderEntireTree(state);
subcriber(renderEntireTree); // pattern observer























// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// NavData={NavData} friendsItem={FriendsItemData} ItemMessagesFriend={ItemMessagesFriend} ItemMessagesUser={ItemMessagesUser} PostData={PostData}


