import React from 'react';
import style from './postItem.module.css';
import SmallImg from '../../../../smalImg/SmallImg.component';
const PostItem = (props) => {
    return(
        <div className={style.post__item}>
                    <div className={style.postItem__top}>
                           <SmallImg img={props.Image} />
                        <div className={style.post__item_textBlock}>
                            <p className={style.post__item_name}>{props.name}</p>
                            <p className={style.post__item_data}>{props.visit}</p>
                        </div>
                    </div>
                    <div className={style.postItem__body}>{props.description}</div>
                    <div className={style.postItem__bottom}>
                       <div className={style.postItem__bottom_coment}><i className="fa fa-inbox"></i>{props.comments}</div>
                       <div className={style.postItem__bottom_box}>
                           <span><i className="fa fa-heart"></i>{props.likes}</span>
                           <span><i className="fa fa-share"></i>{props.shared}</span>
                       </div>
                    </div>
        </div>
    )
}

export default PostItem;