
import { MockedContextState } from '../contexts/MockAppContext';
import UserList from '../components/UserList';
import renderer from 'react-test-renderer';

describe('<UserList />', ()=>{

    it('<UserList /> renders the user list', ()=>{

        let component = renderer.create(<MockedContextState><UserList /></MockedContextState>);
        expect(component.toJSON()).toMatchSnapshot();
        expect(component.root.findByProps({className: "users-list"})).toBeTruthy();
        expect(component.root.findByProps({className: "users-list"}).children.length).toBe(1);

    });

});