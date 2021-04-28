export default interface IUser
{
    login: { username:string; };
    email:string;
    name: { first:string; last:string; }; 
    nat:string;
    picture: { thumbnail:string; }
}