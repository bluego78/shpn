/* IMPORT CSS */
import '../scss/Message.scss';

const Message = (props:any) => {
    return <div className="message">{props.txt}</div>
}

export default Message;