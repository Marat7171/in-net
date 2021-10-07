import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import lookingForAJob from '../../../assets/imeges/lookingForAJob.jpg';
import working from '../../../assets/imeges/working.jpg';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://www.jesuschristsavior.net/Creation.jpeg"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <p>{props.profile.fullName}</p>
                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <p>{props.profile.aboutMe}</p>
                <div>{!props.profile.lookingForAJob ? <img
                    src={working}/> : <img
                    src={lookingForAJob}/>}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;