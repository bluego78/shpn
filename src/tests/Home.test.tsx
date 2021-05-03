import { MockedContextState } from '../contexts/MockAppContext';
import Home from '../components/Home';
import renderer from 'react-test-renderer';

describe('<Home />', ()=>{

    it('<Home /> renders all the elements', ()=>{
        
        let component = renderer.create(
            <MockedContextState>
                <Home />
            </MockedContextState>
          );

        expect(component.toJSON()).toMatchSnapshot();
        expect(component.root.findAllByProps({className: "users-list"})).toHaveLength(1); 
        expect(component.root.findAllByProps({className: "badge-container"}).length).toBe(2); 
        expect(component.root.findAllByProps({className: "userbadge-container"}).length).toBe(2);
        expect(component.root.findAllByProps({className: "nat-flag"}).length).toBe(2);
        expect(component.root.findAllByProps({className: "picture"}).length).toBe(2);
        expect(component.root.findAllByProps({className: "fullname"}).length).toBe(2);
        expect(component.root.findAllByProps({className: "username"}).length).toBe(2);
        expect(component.root.findAllByProps({className: "email"}).length).toBe(2);

    });

});