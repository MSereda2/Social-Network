import React from "react";
import style from './postContainer.module.css';
import PostCreate from './postCreate/PostCreate.component';
import PostItem from './postItem/PostItem.component';



const PostContainer = () => {
    return(
        <div className={style.post}>
            <PostCreate />
            <PostItem Image="https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg" name="Misha Sereda" visit="1 hour ago" description="i will be awesome React developer" comments="25" likes="100" shared="39" />
            <PostItem Image="https://muz-tv.ru/storage/pic/6/6/6673d0a96eb4c1a269fca73c1d207347.jpg" name="Face bitch" visit="50 minutes ago" description="Я ебал твою суку" comments="100" likes="2456" shared="234" />
        </div>
    )
}

export default PostContainer;