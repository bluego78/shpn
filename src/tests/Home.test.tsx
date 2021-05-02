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
        expect(component.root.findByProps({className: "users-list"})).toBeTruthy(); 
        expect(component.root.findByProps({className: "badge-container"})).toBeTruthy(); 
        expect(component.root.findByProps({className: "userbadge-container"})).toBeTruthy(); 
        expect(component.root.findByProps({className: "nat-flag"})).toBeTruthy(); 
        expect(component.root.findByProps({className: "picture"})).toBeTruthy(); 
        expect(component.root.findByProps({className: "fullname"})).toBeTruthy(); 
        expect(component.root.findByProps({className: "username"})).toBeTruthy(); 
        expect(component.root.findByProps({className: "email"})).toBeTruthy(); 

    });

});