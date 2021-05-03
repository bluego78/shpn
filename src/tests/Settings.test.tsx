
import { MockedContextState } from '../contexts/MockAppContext';
import Settings from '../components/Settings';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from "react-router-dom";

let component:any;

beforeEach(()=>{
    component = renderer.create(<MockedContextState><Router><Settings /></Router></MockedContextState>);
});

afterEach(()=>{
    component = null;
});

describe('<Settings />', ()=>{

    it('Renders properly', ()=>{
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Renders the nat container', ()=>{
        expect(component.root.findByProps({className: "nat-container"})).toBeTruthy();
    });

    it('Renders the title', ()=>{
        expect(component.root.findByType('h3').children).toEqual(['Available Nationalities']);
    });

    it('Renders the description', ()=>{
        expect(component.root.findByType('p').children).toEqual(['Please, select the nationalities you want to filter.']);
    });

    it('Renders all the input checkbox', ()=>{
        expect(component.root.findAllByType('input').length).toEqual(process.env.REACT_APP_DEFAULT_NATIONALITIES?.split(",").length);

    });

});