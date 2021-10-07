import s from "./Friengs.module.css";

const ItemFriends = (props) => {
    return (
        <div>
            <div>
                <img className={s.imgItem} src={props.link}/>
            </div>
            <div className={s.elements}>{props.name}</div>
        </div>
    );
};

const Friends = (props) => {
    let friendsElements = props.friends.map((i) => <ItemFriends name={i.name} link={i.link} key={i.id}/>);

    return (
        <div className={s.box}>
            <div className={s.h3}>Friends</div>
            {friendsElements}
        </div>
    );
};

export default Friends;