/* IMPORT NODE MODULES & COMPONENTS */
import { useContext } from 'react';

/* IMPORT CONTEXTS */
import AppContext from '../contexts/AppContext';

/* IMPORT CUSTOM COMPONENTS */
import Loader from './Loader';
import UserList from './UserList';

const Home = (props:any) => {

    //Load the context
    const [appContext, setAppContext] = useContext(AppContext);

    
    return <div id="home" className="content-fluid d-flex flex-column align-items-center justify-content-center">
                {appContext.isLoading && appContext.currentPage===0 ? 
                <Loader />
                : 
                <UserList />
                }
            </div>
         
}
export default Home;