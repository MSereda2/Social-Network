import React from "react";
import style from './postContainer.module.css';
import PostCreate from './postCreate/PostCreate.component';
import PostItem from './postItem/PostItem.component';

const postData = [
    {
        id: 1,
        image: "https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg",
        name: "Misha Sereda",
        visit: "1 hour ago",
        description: "i will be awesome React developer",
        commentsCount: 25,
        likesCount: 100,
        sharedCount: 39
    },
    {
        id: 2,
        image: "https://muz-tv.ru/storage/pic/6/6/6673d0a96eb4c1a269fca73c1d207347.jpg",
        name: "face pill",
        visit: "50 minutes ago",
        description: "Я ебал твою суку",
        commentsCount: 100,
        likesCount: 2456,
        sharedCount: 234
    },
]



const PostContainer = (props) => {
    return(
        <div className={style.post}>
            <PostCreate />
            {postData.map(post => (
                <PostItem id={post.id} Image={post.image} name={post.name} visit={post.visit} description={post.description} comments={post.commentsCount} likes={post.likesCount} shared={post.sharedCount} />
            ))}
        </div>
    )
}

export default PostContainer;