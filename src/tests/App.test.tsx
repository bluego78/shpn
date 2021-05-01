import AppContext from '../contexts/AppContext';
import App from '../components/App';
import renderer from 'react-test-renderer';

describe('<App />', ()=>{

    it('<App /> renders all the elements', ()=>{
        
        const fakeUsers = [
            {
                id: {value:"XX123"},
                login: { username:"theusername" },
                email:"test@example.com",
                name: {first:"John", last:"Doe"},
                nat:"ch",
                picture: { thumbnail:"https://randomuser.me/api/portraits/thumb/men/56.jpg" },
                phone:"+41 76 12345678",
                cell:"+41 76 36958488",
                location: {
                            city:"Chiasso", 
                            country:"Switzerland", 
                            postcode:"6830", 
                            state:"-",
                            street: {name:"C.so San Gottardo", number:"15",}
                        }
            }
        ];

        let mockedContext = {...AppContext, usersList: fakeUsers, filteredUsersList: fakeUsers}
        let component = renderer.create(
            <AppContext.Provider value={mockedContext}>
                <App />
            </AppContext.Provider>
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