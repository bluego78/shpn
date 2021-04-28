/* IMPORT CSS */
import '../scss/UserList.scss';

/* IMPORT NODE MODULES & COMPONENTS*/
import { Fragment, useContext, useEffect, useState } from 'react';

/* IMPORT CONTEXTS */
import AppContext from '../contexts/AppContext';

/* IMPORT INTERFACES */
import IUser from '../Interfaces/IUser';
import IFetchUserResponse from '../Interfaces/IFetchUserResponse';

/* IMPORT CUSTOM COMPONENTS */
import UserBadge from './UserBadge';
import Loader from './Loader';
import EndList from './EndList';

/* IMPORT HELPERS */
import { fetchUser } from '../helpers/Fetch';

export default () => {

    // *isLoading* indicates if is doing a call
    const [isLoading, setIsLoading] = useState(false);

    // *appContext* contains all the shared values between the components
    const [appContext, setAppContext] = useContext(AppContext);

    // *preFetched* is a list where to put the next batch of users to append to the list
    const [preFetched, setPreFetched] = useState([] as Array<IUser>);

    // *loadUsers* do this:
    // it verify if you havent reached the maximum number of users to load
    // loads the next batch of users into the *preFetched* list
    // if the cpage loaded is the first it preloads also the second page and put it into the *preFetched* list

    // *preFetchUsers* prefetches the next batch of users into the *preFetched* list
    const preFetchUsers = async (page:number) => {

        //Shows the loading indicator for the prefetch while is showing the prefetched list
        //Uncomment if you want to show the loader indicator during prefetch
        //setIsLoading(true);

        // Load the users
        let response = await fetchUser(page) as IFetchUserResponse;

        // Put it into the *preFetched* list
        setPreFetched(response.results);

        //Hide the loading indicator
        //setIsLoading(false);
    }

    // *loadUsers* if you are on the first page loads the first batch of users
    // and preload the second one, then shows the first batch on the screen
    // if you are on a next page, appends the prefetched user batch to the screen
    // and preloads the next one
    const loadUsers = async () => {

        // This is to prevent overloads
        if(!isLoading)
        {
            
            // *newList* contains the users loaded before
            let newList:Array<IUser> = [...appContext.usersList];
            let nextPage:number = appContext.currentPage + 1;

            // if we are on the first page, we need to load the first batch and preload the next one
            if(appContext.currentPage===0)
            {
                setIsLoading(true);

                // Load the first batch of users
                let response = await fetchUser(nextPage) as IFetchUserResponse;
                
                setIsLoading(false);

                // *newList* is updated to contains the first batch
                newList = [...response.results];            
            }
            // if we aren't in the first page, we only need to preload the next batch of users
            else
            {
                // and put the prefetched in to the list
                newList.push(...preFetched);
            }

            // Update the context if you haven't shown all the users yet
            if(appContext.usersList.length<parseInt(process.env.REACT_APP_MAX_USER_LOAD as string,10))
            setAppContext({...appContext, usersList: newList, currentPage: nextPage});

            // verify if you have reached the limit of users to load
            if(newList.length<parseInt(process.env.REACT_APP_MAX_USER_LOAD as string,10))
            {
                // Prefetch the next batch of users into the *preFetched* list
                preFetchUsers(nextPage + 1 );
            }
        }
    }

    // *handleScroll* fires the *loadUsers* functions when the scroll reach the end 
    const handleScroll = async (e : any) => {
        // Mesures the height of the element scrolled and if the scroll position matches to the end
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) { 
            await loadUsers();
         }
      }

    useEffect(()=>{
        // To await an async function into the useEffect you have to nested it 
        // into an another async function and call it, because useEffect id not async
        // so you can't use the await
        (async()=>{
            // Load the first batch of users
            await loadUsers();
        })();
    },[]);

    return <Fragment>
                <div className="users-list pb-5" onScroll={(e)=>handleScroll(e)}>
                    {appContext.usersList.map((user:IUser, index:number) => {
                        return <UserBadge key={index} user={user} />
                    })}
                    {isLoading && <Loader /> }
                    {(appContext.usersList.length >= parseInt(process.env.REACT_APP_MAX_USER_LOAD as string, 10)) && <EndList /> }
                </div>
            </Fragment>
}