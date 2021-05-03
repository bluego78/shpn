import { shallow } from 'enzyme';
import Loader from '../components/Loader';

//It's a simple component we can just test if it renders
describe('<Loader />',()=>{

      it("Renders properly", () => {
          let wrapper = shallow(<Loader />);
          expect(wrapper.length).toBe(1);
          expect(wrapper.find(".loader").length).toBe(1);
          expect(wrapper.find(".loader-badge").length).toBe(1);
          expect(wrapper.find(".spinner-border").length).toBe(1);
      });

});