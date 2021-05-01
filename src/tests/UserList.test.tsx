
import React from 'react';
import { mount, shallow } from 'enzyme';
import MockedContext from '../contexts/MockAppContext';
import UserList from '../components/UserList';
import renderer from 'react-test-renderer';

describe('<UserList />', ()=>{

    it('<UserList /> renders the user list', ()=>{

        let component = renderer.create(<MockedContext><UserList /></MockedContext>);
        expect(component.toJSON()).toMatchSnapshot();
        expect(component.root.findByProps({className: "users-list"})).toBeTruthy();
        

    });

});