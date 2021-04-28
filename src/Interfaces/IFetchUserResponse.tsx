/* IMPORT INTERFACES */
import IUser from './IUser';
import IFetchResponseInfo from './IFetchResponseInfo';

export default interface IFetchUserResponse {
    info : IFetchResponseInfo;
    results : Array<IUser>;
}