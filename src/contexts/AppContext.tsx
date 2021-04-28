/* IMPORT NODE MODULES & COMPONENTS*/
import {createContext} from 'react';

/* IMPORT INTERFACES */
import IUser from '../Interfaces/IUser';
import IAppContext from '../Interfaces/IAppContext';

let selectedNationCookie : string | null = sessionStorage.getItem("selectednat");

// Create the context
const appContext: IAppContext | any = createContext({ 
    isLoading: false,
    usersList: [] as Array<IUser>,
    currentPage: 0,
    totalResults:0,
    selectedNation: selectedNationCookie,
});

export default appContext;

