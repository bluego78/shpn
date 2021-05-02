import AppContext from '../contexts/AppContext';
import { MockedContext } from '../contexts/MockAppContext';
import App from '../components/App';
import renderer from 'react-test-renderer';

describe('<App />', ()=>{

    it('<App /> renders all the elements', ()=>{
        
        let component = renderer.create(
            <MockedContext>
                <App />
            </MockedContext>
          );

        expect(component.toJSON()).toMatchSnapshot();
        expect(component.root.findByProps({id: "app-container"})).toBeTruthy(); 
        expect(component.root.findByProps({id: "SearchField"})).toBeTruthy(); 
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