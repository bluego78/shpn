import { shallow } from 'enzyme';
import EndList from '../components/EndList';

//It's a simple component we can just test if it renders
describe('<EndList />',()=>{

      it("Renders properly", () => {
          let wrapper = shallow(<EndList />);
          expect(wrapper.length).toBe(1);
          expect(wrapper.find(".end-list").length).toBe(1);
          expect(wrapper.find(".dot").length).toBe(3);
          expect(wrapper.find(".text").length).toBe(1);
          expect(wrapper.find(".text").html()).toEqual(`<div class="text">End of users catalog</div>`);
      });

}); 