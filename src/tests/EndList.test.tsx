import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import EndList from '../components/EndList';

let container:any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

//It's a simple component we can just test if it renders
it("EndList renders", () => {
    
    act(() => {
      render(<EndList />, container);
    });
    expect(container.textContent).toBe("End of users catalog");
});

