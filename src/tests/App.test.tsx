import { MockedContext } from '../contexts/MockAppContext';
import App from '../components/App';
import renderer, { act } from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<App />', ()=>{

    let component:any;

    beforeAll(()=>{
        act(()=>{
            component = renderer.create(<MockedContext><App /></MockedContext>);
        });
    });

    afterAll(()=>{
        component = null;
    });

    it('Renders properly', ()=>{
        
        let component = renderer.create(
            <MockedContext>
                <App />
            </MockedContext>
          );

        expect(component.toJSON()).toMatchSnapshot();
        
    });

    it('Renders the app-container', ()=>{
        expect(component.root.findAllByProps({id: "app-container"}).length).toBe(1); 
    });


    it('AppContext is properly populated',()=>{
        let app = shallow(<MockedContext><App /></MockedContext>);
        let appContext = toJson(app).props.value;
        expect(appContext.usersList.length).toBe(2);
        expect(appContext.filteredUsersList.length).toBe(2);
        expect(appContext._currentValue.isLoading).toBeFalsy();
        expect(appContext._currentValue.modalIsOpened).toBeFalsy();
        expect(appContext._currentValue.filterIsActive).toBeFalsy();
        expect(appContext._currentValue.currentPage).toEqual(0);
        expect(appContext._currentValue.totalResults).toEqual(0);
    });
    
});