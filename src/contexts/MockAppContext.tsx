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
                    street: {name:"C.so San Gottardo", number:"15"}
                }
    },
    {
        id: {value:"YY456"},
        login: { username:"anotherusername" },
        email:"test2@example.com",
        name: {first:"John", last:"Smith"},
        nat:"gb",
        picture: { thumbnail:"https://randomuser.me/api/portraits/thumb/men/57.jpg" },
        phone:"+44 12 44444444",
        cell:"+44 23 55555555",
        location: {
                    city:"London", 
                    country:"Britain", 
                    postcode:"1234", 
                    state:"-",
                    street: {name:"Par Street", number:"10"}
                }
    }
];

const fakeContext = {...AppContext, usersList: fakeUsers, filteredUsersList: fakeUsers, selectedNations:['ch'] };

export const MockedContextState = ({children}:any)=> {
    const [appState, setAppState] = useState(fakeContext);
    return <AppContext.Provider value={[appState, setAppState]}>{children}</AppContext.Provider>;
}

export const MockedContextStateLoading = ({children}:any)=> {
    let fakeContext = {...AppContext, isLoading:true, currentPage:0 };
    const [appState, setAppState] = useState(fakeContext);
    return <AppContext.Provider value={[appState, setAppState]}>{children}</AppContext.Provider>;
}


export const MockedContext = ({children}:any)=> {
    return <AppContext.Provider value={fakeContext}>{children}</AppContext.Provider>;
}

export const MockedContextLoading = ({children}:any)=> {
    let fakeContext = {...AppContext, isLoading:true, currentPage:0 };
    return <AppContext.Provider value={fakeContext}>{children}</AppContext.Provider>;
}


