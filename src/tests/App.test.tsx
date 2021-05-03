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
        expect(component.root.findAllByProps({id: "app-container"}).length).toBe(1); 
        expect(component.root.findAllByProps({id: "SearchField"}).length).toBe(1);  
        expect(component.root.findAllByProps({className: "users-list"}).length).toBe(1); 
        expect(component.root.findAllByProps({className: "badge-container"}).length).toBe(2); 
        expect(component.root.findAllByProps({className: "userbadge-container"}).length).toBe(2);
        expect(component.root.findAllByProps({className: "nat-flag"}).length).toBe(2);
        expect(component.root.findAllByProps({className: "picture"}).length).toBe(2);
        expect(component.root.findAllByProps({className: "fullname"}).length).toBe(2);
        expect(component.root.findAllByProps({className: "username"}).length).toBe(2);
        expect(component.root.findAllByProps({className: "email"}).length).toBe(2);
        

    });

});