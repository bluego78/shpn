import UserBadge from "../components/UserBadge";
import IUser from '../Interfaces/IUser';
import { shallow } from 'enzyme';
import { fakeUsers } from '../contexts/MockAppContext';

describe('<UserBadge />',()=>{

    it("<UserBadge /> renders all elements & data", async () => {

        let fakeUser = fakeUsers[0];
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