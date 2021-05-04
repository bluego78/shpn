import UserBadge from "../components/UserBadge";
import { shallow } from 'enzyme';
import { fakeUsers } from '../contexts/MockAppContext';

let wrapper:any;
const fakeUser = fakeUsers[0];

beforeEach(()=>{
  wrapper = shallow(<UserBadge user={fakeUser} />);
});

afterEach(()=>{
  wrapper = null;
});

describe('<UserBadge />',()=>{

    it("Renders properly", async () => {
        expect(wrapper.length).toBe(1);
        expect(wrapper.find(".userbadge-container").length).toBe(1);
    });

    it("Renders the user picture", async () => {
        expect(wrapper.find(".picture").length).toBe(1);
    });

    it("Renders the country flag", async () => {
        expect(wrapper.find(".nat-flag").length).toBe(1);
        expect(wrapper.find(".nat-flag").html()).toContain('src="ch.png"');
    });

    it("Renders the user full name", async () => {
        expect(wrapper.find(".fullname").length).toBe(1);
        expect(wrapper.find(".fullname").html()).toEqual(`<div class="fullname">${fakeUser.name.first} ${fakeUser.name.last}</div>`);
    });

    it("Renders the username", async () => {
        expect(wrapper.find(".username").length).toBe(1);
        expect(wrapper.find(".username").html()).toEqual(`<div class="username">${fakeUser.login.username}</div>`);
    });

    it("Renders the e-mail", async () => {
        expect(wrapper.find(".email").length).toBe(1);
        expect(wrapper.find(".email").html()).toEqual(`<div class="email">${fakeUser.email}</div>`);
    });

});