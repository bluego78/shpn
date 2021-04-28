import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Loader from '../components/Loader';

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
it("Loader renders", () => {
    act(() => {
        render(<Loader />, container);
    });
    expect(container.querySelector(".loader").textContent).toBeInTheDocument;
    expect(container.querySelector(".loader-badge").textContent).toBeInTheDocument;
    expect(container.querySelector(".spinner-border").textContent).toBeInTheDocument;
});