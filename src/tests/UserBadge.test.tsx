import UserBadge from "../components/UserBadge";
import IUser from '../Interfaces/IUser';
import { shallow } from 'enzyme';

describe('<UserBadge />',()=>{

    it("<UserBadge /> renders all elements & data", async () => {

        const fakeUser:IUser = {
      
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
        };
      
        let wrapper = shallow(<UserBadge user={fakeUser} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find(".picture").length).toBe(1);
        expect(wrapper.find(".nat-flag").length).toBe(1);
        expect(wrapper.find(".userbadge-container").length).toBe(1);
        expect(wrapper.find(".fullname").length).toBe(1);
        expect(wrapper.find(".fullname").html()).toEqual(`<div class="fullname">${fakeUser.name.first} ${fakeUser.name.last}</div>`);
        expect(wrapper.find(".username").length).toBe(1);
        expect(wrapper.find(".username").html()).toEqual(`<div class="username">${fakeUser.login.username}</div>`);
        expect(wrapper.find(".email").length).toBe(1);
        expect(wrapper.find(".email").html()).toEqual(`<div class="email">${fakeUser.email}</div>`);
      
      });

});