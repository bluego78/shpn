/* IMPORT CSS */
import '../scss/UserList.scss';

/* IMPORT NODE MODULES & COMPONENTS*/
import { Fragment, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';

/* IMPORT CONTEXTS */
import AppContext from '../contexts/AppContext';

/* IMPORT INTERFACES */
import IUser from '../Interfaces/IUser';
import IFetchUserResponse from '../Interfaces/IFetchUserResponse';

/* IMPORT CUSTOM COMPONENTS */
import UserBadge from './UserBadge';
import Loader from './Loader';
import EndList from './EndList';
import Message from './Message';

/* IMPORT HELPERS */
import { fetchUser } from '../helpers/Fetch';

export default (props:any) => {

    // *isLoading* indicates if is doing a call
    const [isLoading, setIsLoading] = useState(false);

    // *appContext* contains all the shared values between the components
    const [appContext, setAppContext] = useContext(AppContext);

    // *preFetched* is a list where to put the next batch of users to append to the list
    const [preFetched, setPreFetched] = useState([] as Array<IUser>);

    // *userSelected* is where we put the user clicked that we want to show details
    const [userSelected, setUserSelected] = useState<IUser | null>(null);

    //CSS-in-JS Styles for the modal
    const modalStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          borderRadius          : '10px',
          minWidth              : '320px',
          transform             : 'translate(-50%, -50%)'
        }
      };

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
            setAppContext({...appContext, usersList: newList, filteredUsersList: newList, currentPage: nextPage});

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
        if (bottom && !appContext.filterIsActive) { 
            await loadUsers();
         }
      }

      const openUserModal = (user:IUser) => {
        setAppContext({...appContext, modalIsOpened:true});
        setUserSelected(user);
      }
      
    useEffect(()=>{
        // To await an async function into the useEffect you have to nested it 
        // into an another async function and call it, because useEffect id not async
        // so you can't use the await
        (async()=>{
            // Load the first batch of users only the first time
            //if(appContext.currentPage===0)
            await loadUsers();
        })();

        //Show the search field if hidden by the settings page
        if(document.getElementById('SearchField')){
            var myElement: HTMLInputElement = document.getElementById('SearchField') as HTMLInputElement;
            myElement.classList.remove("d-none");
        }

    },[]);

    return <Fragment>
                {appContext.filterIsActive && <Message txt="A filter is active, you cannot load more users during search." />}
                <div className="users-list" onScroll={(e)=>handleScroll(e)}>
                    {appContext.filteredUsersList!==undefined && appContext.filteredUsersList.map((user:IUser, index:number) => {
                        return <div key={index} className="badge-container" onClick={()=>openUserModal(user)} ><UserBadge user={user} /></div>
                    })}
                    {isLoading && <Loader /> }
                    {(appContext.usersList!==undefined && appContext.usersList.length >= parseInt(process.env.REACT_APP_MAX_USER_LOAD as string, 10)) && !appContext.filterIsActive && <EndList /> }
                </div>

                <Modal
                    isOpen={appContext.modalIsOpened}
                    /*onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}*/
                    style={modalStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    >
                        <div className="modal-content">
                                <UserBadge user={userSelected} />
                                <hr />
                                <div className="contacts-details">
                                    <div className="address-details-label">Address: </div>
                                    <div className="address-details-text">{userSelected?.location.street.number}, {userSelected?.location.street.name}</div>
                                </div>
                                <div className="contacts-details">
                                    <div className="address-details-label">City: </div>
                                    <div className="address-details-text">{userSelected?.location.city}</div>
                                </div>
                                <div className="contacts-details">
                                    <div className="address-details-label">State: </div>
                                    <div className="address-details-text">{userSelected?.location.state}</div>
                                </div>
                                <div className="contacts-details">
                                    <div className="address-details-label">Zip code: </div>
                                    <div className="address-details-text">{userSelected?.location.postcode}</div>
                                </div>
                                <div className="contacts-details">
                                    <div className="address-details-label">Phone: </div>
                                    <div className="address-details-text">{userSelected?.phone}</div>
                                </div>
                                <div className="contacts-details">
                                    <div className="address-details-label">Cell: </div>
                                    <div className="address-details-text">{userSelected?.cell}</div>
                                </div>
                                <hr />
                                <button className="btn btn-primary btn-close-modal" onClick={()=>{setAppContext({...appContext, modalIsOpened:false});}}>CLOSE</button>
                        </div>
                        
                </Modal>
            </Fragment>
}