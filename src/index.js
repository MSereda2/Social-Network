import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

// DATA
const NavData = [
    {
        id: 1,
        to: '/profile',
        name: 'Profile',
        icon: 'fa fa-user'
    },
    {
        id: 2,
        to: '/dialogs',
        name: 'Message',
        icon: 'fa fa-inbox'
    },
    {
        id: 3,
        to: '/news',
        name: 'News',
        icon: 'fa fa-book'
    },
    {
        id: 4,
        to: '/music',
        name: 'Music',
        icon: 'fa fa-music'
    },
    {   
        id: 5,
        to: '/settings',
        name: 'Settings',
        icon: 'fa fa-cog'
    },
];

const FriendsItemData = [
    {
        name: "Миша Середа",
        img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg",
        id: 1,
    },
    {
        name: "Петя Михаличенко",
        img: "https://sun9-35.userapi.com/c854428/v854428792/bec53/QJzoJ4tIamo.jpg",
        id: 2,
    },
    {
        name: "Мустафа куртбеков",
        img: "https://sun9-21.userapi.com/c858016/v858016505/140e94/OMRyRJ3Rngc.jpg",
        id: 3,
    },
    {
        name: "Daria Zaminina",
        img: "https://sun9-56.userapi.com/c626619/v626619699/52a2c/93cmNcF__Bc.jpg",
        id: 4,
    },
];

const ItemMessagesFriend = [
    {
        text: "Привет)",
        img: "https://sun9-56.userapi.com/c626619/v626619699/52a2c/93cmNcF__Bc.jpg",
    },
    {
        text: "Слушай красавчик понакидай мне музыки пожалуйста у тебя шикарный вкус",
        img: "https://sun9-56.userapi.com/c626619/v626619699/52a2c/93cmNcF__Bc.jpg",
    },
    {
        text: "Не торопись выбирай тщательней",
        img: "https://sun9-56.userapi.com/c626619/v626619699/52a2c/93cmNcF__Bc.jpg",
    },
    
    
    
];

const ItemMessagesUser = [
    {
        text: "хахах спс ты конечно тоже обезбашеная. Мне это нравиться",
        img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg"
    },
    {
        text: "Ок, сек.",
        img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg"
    },
    

];

ReactDOM.render(<App NavData={NavData} friendsItem={FriendsItemData} ItemMessagesFriend={ItemMessagesFriend} ItemMessagesUser={ItemMessagesUser}  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
