/* IMPORT NODE MODULES & COMPONENTS */
import {useState, useContext } from 'react';

/* IMPORT CONTEXTS */
import AppContext from '../contexts/AppContext';

/* IMPORT INTERFACES */
import IAppContext from '../Interfaces/IAppContext';

/* IMPORT CUSTOM COMPONENTS */
import Loader from './Loader';
import Layout from './Layout';

export default () => {

    //Load the context and set it into the state
    const [appContext, setAppContext] = useState(useContext(AppContext) as IAppContext);
    
    return <AppContext.Provider value={[appContext, setAppContext]}>
                <div className="content-fluid d-flex flex-column align-items-center justify-content-center">
                {appContext.isLoading && appContext.currentPage===0 ? 
                <Loader />
                : 
                <Layout />
                }
                </div>
            </AppContext.Provider>
}
