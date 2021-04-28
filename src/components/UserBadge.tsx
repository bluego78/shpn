/* IMPORT CSS */
import '../scss/UserBadge.scss';

/* IMPORT INTERFACES */
import IUser from '../Interfaces/IUser';


export default (props:any) => {

    //Attributes type to props.user
    let user: IUser = props.user;

    return <div className="userbadge-container">
            <img className="picture" alt={`${user.name.last} ${user.name.first} picture`} src={user.picture.thumbnail} />
            <div>{user.name.last} {user.name.first}</div>
            <div className="username">{user.login.username}</div>
            <div className="email">{user.email}</div>
        </div>
}