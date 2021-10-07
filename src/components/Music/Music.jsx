import s from './Music.module.css'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Music = () => {
    return (
        <div className={s.item}>
            This is music!
        </div>
    );
}

export default withAuthRedirect(Music);