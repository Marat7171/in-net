import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import lookingForAJob from '../../../assets/imeges/lookingForAJob.jpg';
import working from '../../../assets/imeges/working.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usersPhoto from "../../../assets/imeges/UserImageDefult.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <p>{profile.fullName}</p>
                <img src={profile.photos.large || usersPhoto} className={s.mainPhoto} />
                { isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
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