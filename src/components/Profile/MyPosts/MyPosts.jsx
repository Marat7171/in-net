import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React, {PureComponent} from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder='Here input text' name='newPostText'
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "AddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo(props => {
    
    let postsElements =
        [...props.posts]
            .reverse()
            .map(el => <Post message={el.message} likesCount={el.likesCount} key={el.id}/>);

    let onSendPost = (PostData) => {
        props.addPost(PostData.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostFormRedux onSubmit={onSendPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

export default MyPosts