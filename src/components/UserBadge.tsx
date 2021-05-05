/* IMPORT CSS */
import '../scss/UserBadge.scss';
import {getIcon} from  '../helpers/Tools';

/* IMPORT INTERFACES */
import IUser from '../Interfaces/IUser';


const UserBadge = (props:any) => {

    //Attributes type to props.user
    let user: IUser = props.user;

    return <div className="userbadge-container">
            <div className="nat-flag"><img alt={`${user.nat} flag`} src={getIcon(user.nat)} /></div>
            <img className="picture" alt={`${user.name.first} ${user.name.last}`} src={user.picture.thumbnail} />
            <div className="fullname">{user.name.first} {user.name.last}</div>
            <div className="username">{user.login.username}</div>
            <div className="email">{user.email}</div>
        </div>
}

export default UserBadge;