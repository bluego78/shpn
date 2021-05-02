/* IMPORT CSS */
import '../scss/UserBadge.scss';

/* IMPORT IMAGES */
import gb from '../imgs/gb.png';
import ch from '../imgs/ch.png';
import es from '../imgs/es.png';
import fr from '../imgs/fr.png';

/* IMPORT INTERFACES */
import IUser from '../Interfaces/IUser';


export default (props:any) => {

    //Attributes type to props.user
    let user: IUser = props.user;

    // *getIcon* sets the icon based on nat property
    const getIcon = (nat:string) => {
        switch(nat.toLowerCase())
        {
            case 'gb':
                return gb;
            case 'ch':
                return ch;
            case 'fr':
                return fr;
            case 'es':
                return es;
        }
    }

    return <div className="userbadge-container">
            <div className="nat-flag"><img alt={`${user.name.first} ${user.name.last} picture`} src={getIcon(user.nat)} /></div>
            <img className="picture" alt={`${user.name.first} ${user.name.last} picture`} src={user.picture.thumbnail} />
            <div className="fullname">{user.name.first} {user.name.last}</div>
            <div className="username">{user.login.username}</div>
            <div className="email">{user.email}</div>
        </div>
}