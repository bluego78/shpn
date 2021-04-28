/* IMPORT INTERFACES */
import IUser from './IUser';

export default interface IAppContext {
    isLoading:boolean;
    filterIsActive:boolean;
    usersList: Array<IUser>;
    filteredUsersList: Array<IUser>;
    currentPage: number;
    totalResults:number;
    selectedNations: Array<string>;
}