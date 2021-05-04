/* IMPORT IMAGES */
import gb from '../imgs/gb.png';
import ch from '../imgs/ch.png';
import es from '../imgs/es.png';
import fr from '../imgs/fr.png';

export const getIcon = (nat:string) => {
    switch(nat.toLowerCase())
    {
        case 'gb':
            return gb;
        case 'ch':
            return ch;
        case 'fr':
            return fr;
        case 'es':
            return es;
    }
}

export const getNationalitiesFromCookie = (nationalitiesCookie:string|null) => {
    return (nationalitiesCookie===null || nationalitiesCookie==="") ? process.env.REACT_APP_DEFAULT_NATIONALITIES as string : nationalitiesCookie;
}