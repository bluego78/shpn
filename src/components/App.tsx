/* IMPORT CSS */
import '../scss/App.scss';

/* IMPORT NODE MODULES & COMPONENTS */
import {useState, useContext} from 'react';

/* IMPORT CONTEXTS */
import AppContext from '../contexts/AppContext';

/* IMPORT INTERFACES */
import IAppContext from '../Interfaces/IAppContext';

/* IMPORT CUSTOM COMPONENTS */
import Loader from './Loader';
import NavBar from './NavBar';
import UserList from './UserList';


export default () => {

    //Load the context and set it into the state
    const [appContext, setAppContext] = useState(useContext(AppContext) as IAppContext);
    
    return <div className="content-fluid d-flex flex-column align-items-center justify-content-center">
        { appContext.isLoading && appContext.currentPage===0 ? 
        <Loader />
        :
        <AppContext.Provider value={[appContext, setAppContext]}>
            <NavBar />
            <UserList />
        </AppContext.Provider>
        }
    </div>
}
