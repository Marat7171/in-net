import s from "./../Dialogs.module.css";


const Message = (props) => {
    let resultStyle;
    (props.from == 'outgoing') ? resultStyle = s.dialogLeft : resultStyle = s.dialogRight;
    return (
        <div className={s.messItem}>
            <div className={resultStyle}>
                <img className={s.img} src="https://im0-tub-ru.yandex.net/i?id=796fa6c1bfcb78d1ffb9fae47be1100e&n=13"/>
                {props.message}
            </div>
        </div>
    );

};

export default Message;