import { shallow } from 'enzyme';
import Message from '../components/Message';

//It's a simple component we can just test if it renders
describe('<Message />',()=>{

      it("<Message /> renders if txt not passed", () => {
          let wrapper = shallow(<Message />);
          expect(wrapper.length).toBe(1);
          expect(wrapper.find(".message").html()).toEqual(`<div class="message"></div>`);
      });

      it("<Message /> renders if txt passed", () => {
          let wrapper = shallow(<Message txt={"test"} />);
          expect(wrapper.length).toBe(1);
          expect(wrapper.find(".message").html()).toEqual(`<div class="message">test</div>`);
      });
});