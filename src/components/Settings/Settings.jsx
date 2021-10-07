import s from './Settings.module.css';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Settings = () => {
    return (
        <div className={s.item}>
            This is Settings!
        </div>
    );
}


export default withAuthRedirect(Settings);