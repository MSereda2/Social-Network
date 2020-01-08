import React from 'react';
import style from './postItem.module.css';

const PostItem = () => {
    return(
        <div className={style.post__item}>
                    <div className={style.postItem__top}>
                        <div className={style.postItem__boxImg}>
                           <img className={style.postItem__image} src="https://sun9-3.userapi.com/c840727/v840727923/1a893/WRUMvb6PxXA.jpg" />
                        </div>
                        <div className={style.post__item_textBlock}>
                            <p className={style.post__item_name}>Misha Sereda</p>
                            <p className={style.post__item_data}>about 1 hour ago</p>
                        </div>
                    </div>
                    <div className={style.postItem__body}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aspernatur unde dolor explicabo commodi repellendus neque iure eaque hic eos illum distinctio similique nihil, odit at recusandae. Dolorum, dicta non.
                    </div>
                    <div className={style.postItem__bottom}>
                       <div className={style.postItem__bottom_coment}><i className="fa fa-inbox"></i>11</div>
                       <div className={style.postItem__bottom_box}>
                           <span><i className="fa fa-heart"></i>23</span>
                           <span><i className="fa fa-share"></i>28</span>
                       </div>
                    </div>
                </div>
    )
}

export default PostItem;