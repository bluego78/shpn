import {fetchUser} from '../helpers/Fetch';

export default describe('<Fetch />', ()=>{
    
    //Set the old env
    const OLD_ENV = process.env;

    beforeEach(() => {
        jest.resetModules() // This clears the cache
        process.env = { ...OLD_ENV }; // Make a copy of the env
      });
    
    afterAll(() => {
        process.env = OLD_ENV; // Restore old environment
    });

    it('the response matches the IFetchResponseInfo interface', async () => {

        //Get the parameters from the environment file
        process.env.REACT_APP_RANDOMUSER_URL='https://randomuser.me/api/'
        process.env.REACT_APP_DEFAULT_NATIONALITIES='CH,ES,FR,GB'

        //expect.assertions(2);
        expect(fetchUser).toBeDefined();
        const data = await fetchUser(1); //Call page 1
        expect(data instanceof Object).toBeTruthy();
        expect(data).toHaveProperty("info");
        expect(data.info).toBeDefined();
        expect(data.info instanceof Object).toBeTruthy();
        expect(data).toHaveProperty("results");
        expect(data.results).toBeDefined();
        expect(data.results instanceof Array).toBeTruthy();
       
    });


})