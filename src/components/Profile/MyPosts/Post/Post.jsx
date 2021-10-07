import s from './Post.module.css';

const Post = (props) => {


    return (
        <div className={s.item}>
            <img src='https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-10.jpg'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post