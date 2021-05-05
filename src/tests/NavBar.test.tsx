
import { MockedContextState } from '../contexts/MockAppContext';
import NavBar from '../components/NavBar';
import renderer,{act} from 'react-test-renderer';
import { BrowserRouter as Router } from "react-router-dom";

describe('<NavBar />', ()=>{

    let component:any;

    beforeEach(()=>{
        component = renderer.create(<MockedContextState><Router><NavBar /></Router></MockedContextState>);
    });

    afterEach(()=>{
        component = null;
    });

    it('renders properly', ()=>{
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders the search field', ()=>{
        expect(component.root.findByProps({id: "SearchField"})).toBeTruthy();
    });

    it('renders the settings icon', ()=>{
        expect(component.root.findByProps({className: "gear-icon"})).toBeTruthy();
    });
    
    
}); 