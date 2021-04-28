import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import UserBadge from "../components/UserBadge";
import IUser from '../Interfaces/IUser';

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

it("Renders user data", async () => {

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
                country:"Switxerland", 
                postcode:"6830", 
                state:"-",
                street: {name:"C.so San Gottardo", number:"15",}
            }
  };

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<UserBadge user={fakeUser} />, container);
  });

  //Verify if the elements are rendered on the document
  expect(container.querySelector(".fullname").textContent).toBe(`${fakeUser.name.first} ${fakeUser.name.last}`);
  expect(container.querySelector(".username").textContent).toBe(fakeUser.login.username);
  expect(container.querySelector(".email").textContent).toBe(fakeUser.email);
  expect(container.querySelector(".picture").textContent).toBeInTheDocument;
  expect(container.querySelector(".nat-flag").textContent).toBeInTheDocument;
 

});