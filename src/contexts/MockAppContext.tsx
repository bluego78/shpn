/* IMPORT NODE MODULES & COMPONENTS*/
import {useState} from 'react';
import AppContext from './AppContext';

export const fakeUsers = [
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

const fakeContext = {...AppContext, usersList: fakeUsers, filteredUsersList: fakeUsers};

export const MockedContextState = ({children}:any)=> {
    const [appState, setAppState] = useState(fakeContext);
    return <AppContext.Provider value={[appState, setAppState]}>{children}</AppContext.Provider>;
}

export const MockedContext = ({children}:any)=> {
    return <AppContext.Provider value={fakeContext}>{children}</AppContext.Provider>;
}


