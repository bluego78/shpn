/* IMPORT NODE MODULES & COMPONENTS */
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


/* IMPORT CUSTOM COMPONENTS */
import NavBar from './NavBar';
import Home from './Home';
import Settings from './Settings';


const Layout = (props:any) => {

    return (
        <div className="layout">
            <Router>
                <NavBar />
                <Switch>
                    <Route path='/' exact render={(props) => <Home />} />
                    <Route path='/home' exact render={(props) => <Home />} />
                    <Route path='/settings' exact render={(props) => <Settings />} />
                </Switch>
            </Router>
        </div>
    );
}
export default Layout;