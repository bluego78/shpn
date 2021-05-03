import { MockedContextState } from '../contexts/MockAppContext';
import Layout from '../components/Layout';
import renderer from 'react-test-renderer';


describe('<Layout />',()=>{

    let component:any;

    beforeAll(()=>{
        component = renderer.create(<MockedContextState><Layout /></MockedContextState>);
    });

    afterAll(()=>{
        component = null;
    });

    it('Renders properly', ()=>{
        expect(component.toJSON()).toMatchSnapshot();
    });
    
    it('Renders the layout container', ()=>{
        expect(component.root.findAllByProps({className: "layout"}).length).toBe(1); 
    });
    
    it('Renders the <Navbar /> component', ()=>{
        expect(component.root.findAllByProps({id: "navbar"}).length).toBe(1); 
    });

    it('Renders the <Home /> component', ()=>{
        expect(component.root.findAllByProps({id: "home"}).length).toBe(1); 
    });
    
});
