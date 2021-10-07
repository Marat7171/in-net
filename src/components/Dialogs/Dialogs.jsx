import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessadeFormRedux from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messageElements = props.dialogsPage.messages.map((m) => <Message message={m.message} from={m.from} key={m.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;

    if (!props.isAuth) return <Redirect to='/login'/>;

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <AddMessadeFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;