export default interface IUser
{
    id: {value:string;};
    login: { username:string; };
    email:string;
    name: { first:string; last:string; }; 
    nat:string;
    picture: { thumbnail:string; };
    phone:string;
    cell:string;
    location: {
                city:string; 
                country:string; 
                postcode:string; 
                state:string;
                street: {name:string; number:string;};
            }
}