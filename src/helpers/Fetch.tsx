/* IMPORT NODE MODULES & COMPONENTS*/
import axios from 'axios';

/* IMPORT INTERFACES */
import IFetchUserResponse from '../Interfaces/IFetchUserResponse';

export const fetchUser = async (page:number) : Promise<IFetchUserResponse> => {

    //Get the parameters from environment variables
    let url:string = process.env.REACT_APP_RANDOMUSER_URL as string;
    let nationalities = process.env.REACT_APP_DEFAULT_NATIONALITIES as string;
    let resultsPerPage = process.env.REACT_APP_RESULTS_PER_PAGE as string;

    //do the call and return the response
    //TODO: manage errors on the screen
    return await axios.get(`${url}?nat=${nationalities}&results=${resultsPerPage}&seed=acb&page=${page}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                  // Request made and server responded
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
            });
}