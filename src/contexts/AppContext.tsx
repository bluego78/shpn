/* IMPORT NODE MODULES & COMPONENTS*/
import {createContext} from 'react';

/* IMPORT INTERFACES */
import IUser from '../Interfaces/IUser';
import IAppContext from '../Interfaces/IAppContext';

let selectedNationCookie : string | null = localStorage.getItem("selectednat");

// Create the context
const appContext: IAppContext | any = createContext({ 
    isLoading: false,
    filterIsActive:false,
    usersList: [] as Array<IUser>,
    filteredUsersList: [] as Array<IUser>,
    currentPage: 0,
    totalResults:0,
    selectedNations: selectedNationCookie!==null ? selectedNationCookie.split(",") : [],
    modalIsOpened:false,
});

export default appContext;

