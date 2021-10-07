import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(20);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field  type="text" name="newMessageBody"
                    validate={[required, maxLength50]}
                    component={Textarea} placeholder="Enter your message"/>
            <div><button>Send</button></div>
        </form>
    )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);