import { MockedContextState, MockedContextStateLoading } from '../contexts/MockAppContext';
import Home from '../components/Home';
import renderer from 'react-test-renderer';

describe('<Home /> during the loading phase',()=>{

    let component:any;

    beforeAll(()=>{
        component = renderer.create(<MockedContextStateLoading><Home /></MockedContextStateLoading>);
    });

    afterAll(()=>{
        component = null;
    });

    it('Renders the app-container', ()=>{
        expect(component.root.findAllByProps({id: "home"}).length).toBe(1); 
    });
    
    it('Renders the <Loader /> component', ()=>{
        expect(component.root.findAllByProps({className: "loader"}).length).toBe(1); 
    });
    
});

describe('<Home /> when context is loaded',()=>{

    let component:any;

    beforeAll(()=>{
        component = renderer.create(<MockedContextState><Home /></MockedContextState>);
    });

    afterAll(()=>{
        component = null;
    });

    it('Renders properly', ()=>{
        expect(component.toJSON()).toMatchSnapshot();
    });
    
    it('Renders the home container', ()=>{
        expect(component.root.findAllByProps({id: "home"}).length).toBe(1); 
    });
    
    it('Renders the <UserList /> component', ()=>{
        expect(component.root.findAllByProps({className: "users-list"}).length).toBe(1); 
    });
    
    it('Does not render the <Loader /> component', ()=>{
        expect(component.root.findAllByProps({className: "loader"}).length).toBe(0); 
    });

});
