import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Message from '../components/Message';

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

it("Message renders with or without txt", () => {
    
    act(() => {
      render(<Message txt="Waring this is a message" />, container);
    });
    expect(container.textContent).toBe("Waring this is a message");

    act(() => {
        render(<Message />, container);
      });
      expect(container.textContent).toBe("");
  
});

