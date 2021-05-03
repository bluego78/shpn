
import { MockedContextState } from '../contexts/MockAppContext';
import UserList from '../components/UserList';
import renderer, { act } from 'react-test-renderer';

describe('<UserList />', ()=>{

    let component:any;

    beforeAll(()=>{
        act(()=>{
            component = renderer.create(<MockedContextState><UserList /></MockedContextState>);
        });
    });

    afterAll(()=>{
        component = null;
    });

    it('Renders properly', ()=>{
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Renders the user list', ()=>{
        expect(component.root.findByProps({className: "users-list"})).toBeTruthy();
    });

    it('Renders the correct number of users', ()=>{
        expect(component.root.findByProps({className: "users-list"}).children.length).toBe(2);
    });


});