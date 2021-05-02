
import { MockedContextState } from '../contexts/MockAppContext';
import NavBar from '../components/NavBar';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";

describe('<NavBar />', ()=>{

    it('<NavBar /> renders the field and the settings icon', ()=>{

        let component = renderer.create(<MockedContextState><Router><NavBar /></Router></MockedContextState>);
        expect(component.toJSON()).toMatchSnapshot();
        expect(component.root.findByProps({className: "gear-icon"})).toBeTruthy();
        expect(component.root.findByProps({id: "SearchField"})).toBeTruthy();

    });

}); 