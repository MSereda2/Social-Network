import {renderEntireTree} from '../render';
const state = {
    navbar: {
        NavLinkData: [
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
        ],
    },
    dialogs: {
        FriendsItemData: [
            {
                name: "Миша Середа",
                img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg",
                id: 1,
                url: `/dialogs`
            },
            {
                name: "Петя Михаличенко",
                img: "https://sun9-35.userapi.com/c854428/v854428792/bec53/QJzoJ4tIamo.jpg",
                id: 2,
                url: `/dialogs`
            },
            {
                name: "Мустафа куртбеков",
                img: "https://sun9-21.userapi.com/c858016/v858016505/140e94/OMRyRJ3Rngc.jpg",
                id: 3,
                url: `/dialogs`
            },
            {
                name: "Daria Zaminina",
                img: "https://sun9-56.userapi.com/c626619/v626619699/52a2c/93cmNcF__Bc.jpg",
                id: 4,
                url: `/dialogs`
            },
            {
                name: "Катя Картинская",
                img: "https://sun9-8.userapi.com/c856520/v856520157/7e517/7p99z8vSGKg.jpg",
                id: 5,
                url: `/dialogs`
            },
        ],
        ItemMessagesFriends: [
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
            
            
            
        ],
        ItemMessagesUsers: [
            {
                id: 1,
                text: "хахах спс ты конечно тоже обезбашеная. Мне это нравиться",
                img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg"
            },
            {
                id: 2,
                text: "Ок, сек.",
                img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg"
            },
            
        
        ],
        inputMessageValue: 'Write message...'
    },
    profile: {
        PostData: [
            {
                id: 1,
                image: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg",
                name: "Misha Sereda",
                visit: "1 hour ago",
                description: "Я хочу развить навыки соблазненич",
                commentsCount: 25,
                likesCount: 100,
                sharedCount: 39
            },
            {
                id: 2,
                image: "https://muz-tv.ru/storage/pic/6/6/6673d0a96eb4c1a269fca73c1d207347.jpg",
                name: "face pill",
                visit: "50 minutes ago",
                description: "Work your ass off",
                commentsCount: 100,
                likesCount: 2456,
                sharedCount: 234
            },
            
        ],
        newTextInput: 'try to wright'
        
    }
};

export let addPost = () => {
    let newPost = {
        id: 3,
        image: 'https://muz-tv.ru/storage/pic/6/6/6673d0a96eb4c1a269fca73c1d207347.jpg',
        name: "face",
        visit: '50 minutes ago',
        description: state.profile.newTextInput,
        commentsCount: 5,
        likesCount: 129,
        sharedCount: 10,
    }
    state.profile.PostData.push(newPost);
    state.profile.newTextInput = '';
    renderEntireTree(state);

}

export let updateInputValue = (newText) => {
    state.profile.newTextInput = newText;
    renderEntireTree(state);
}

export let sendMessage = () => {
    let newMessage = {
        id: 3,
        text: state.dialogs.inputMessageValue,
        img: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg"
    }
    state.dialogs.ItemMessagesUsers.push(newMessage);
    state.dialogs.inputMessageValue = "";
    renderEntireTree(state);
}

export let updateMessageInput = (message) => {
    state.dialogs.inputMessageValue = message;
    renderEntireTree(state);
}

// console.log(addPost.newPost.inputValue)
export default state;



