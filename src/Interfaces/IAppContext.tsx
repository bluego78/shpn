/* IMPORT INTERFACES */
import IUser from './IUser';

export default interface IAppContext {
    isLoading:boolean;
    usersList: Array<IUser>;
    currentPage: number;
    totalResults:number;
    selectedNation: string | null;
}