import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import lookingForAJob from '../../../assets/imeges/lookingForAJob.jpg';
import working from '../../../assets/imeges/working.jpg';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
                <p>{profile.fullName}</p>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <p>{profile.aboutMe}</p>
                <div>{!profile.lookingForAJob ? <img
                    src={working}/> : <img
                    src={lookingForAJob}/>}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;