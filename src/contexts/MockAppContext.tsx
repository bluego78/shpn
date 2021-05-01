/* IMPORT NODE MODULES & COMPONENTS*/
import {useState} from 'react';
import AppContext from './AppContext';

export const MockedContext = ({children}:any)=> {

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
        },
        {
            id: {value:"XX456"},
            login: { username:"theusername2" },
            email:"test2@example.com",
            name: {first:"John", last:"Smith"},
            nat:"gb",
            picture: { thumbnail:"https://randomuser.me/api/portraits/thumb/men/55.jpg" },
            phone:"+41 76 987654321",
            cell:"+41 76 98989898",
            location: {
                        city:"London", 
                        country:"Britain", 
                        postcode:"1234", 
                        state:"-",
                        street: {name:"Park Street", number:"11",}
                    }
        }
    ];
    const [appState, setAppState] = useState({...AppContext, usersList: fakeUsers, filteredUsersList: fakeUsers});
    return <AppContext.Provider value={[appState, setAppState]}>{children}</AppContext.Provider>

}
export default MockedContext;


