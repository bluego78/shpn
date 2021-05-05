/* IMPORT CSS */
import '../scss/Settings.scss';

/* IMPORT NODE MODULES & COMPONENTS*/
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* IMPORT INTERFACES */
import IUser from '../Interfaces/IUser';

/* IMPORT CONTEXTS */
import AppContext from '../contexts/AppContext';

const Settings = () => {

    // *appContext* contains all the shared values between the components
    const [appContext, setAppContext] = useContext(AppContext);

    //let selectedNationCookie : string | null = localStorage.getItem("selectednat");
    const nationalities : Array<string> = (process.env.REACT_APP_DEFAULT_NATIONALITIES as string).split(",");
    const natNames: Array<string> = (process.env.REACT_APP_DEFAULT_NATIONALITIES_NAMES as string).split(",");

    const setNationalities = (e:React.ChangeEvent<HTMLInputElement>) => {

        //Get the value
        let ckeched:boolean = e.target.checked;
        let value:string = e.target.value;

        //Copy the natlist from the context (the context is updated to the cookie)
        let natList = [...appContext.selectedNations];

        if(ckeched)
        {
            if(!natList.includes(value))
            {
                //add the nat to the list
                natList.push(value);
            }
        }
        else
        {
            if(natList.includes(value))
            {
                //remove the nat from the list
                natList = natList.filter(nat=>nat!==value);
            }
        }

        //update state context selectedNation and clean the search
        setAppContext({...appContext, 
            selectedNations: natList, 
            filterIsActive:false,
            usersList: [] as Array<IUser>, 
            filteredUsersList: [] as Array<IUser>, 
            currentPage: 0,
            totalResults:0
        });

        //set te cookie to a comma separated value of the nationalities
        localStorage.setItem("selectednat",natList.join());
    }

    useEffect(()=>{

        //Empty and hide the search field when go to the settings page
        var searchField: HTMLInputElement = document.getElementById('SearchField') as HTMLInputElement;
        if(searchField){
            searchField.value="";
            searchField?.classList.add("d-none");
        }

    },[])

    return <div className="nat-container">
                <h3>Available Nationalities</h3>
                <p>Please, select the nationalities you want to filter.</p>
                {nationalities.map((nat,i)=>{
                    //verify if is checked in the context & the cookie
                    let checked:boolean = appContext.selectedNations.includes(nat);
                    return <div key={i} className="nat-row">
                        <input id={nat.toLowerCase()} type="checkbox" onChange={(e)=>setNationalities(e)} value={nat} checked={checked}/>{natNames[i]} ({nat})
                        </div>
                })}
                <Link to="/home" className="btn btn-primary back-button">back</Link>
            </div>
}

export default Settings;