import { getIcon, getNationalitiesFromCookie } from '../helpers/Tools';

describe('*getIcon* function',()=>{

    let flag:any;
    afterEach(()=>{
        flag = null;
    });

    it('returns the GB flag', ()=>{
        let flag = getIcon('gb');
        expect(flag).toBe("gb.png");
    });

    it('returns the CH flag', ()=>{
        let flag = getIcon('ch');
        expect(flag).toBe("ch.png");
    });

    it('returns the FR flag', ()=>{
        let flag = getIcon('fr');
        expect(flag).toBe("fr.png");
    });

    it('returns the ES flag', ()=>{
        let flag = getIcon('es');
        expect(flag).toBe("es.png");
    });

});

describe('*getNationalitiesFromCookie* function',()=>{

    let nats:any;
    afterEach(()=>{
        nats = null;
    });

    it('returns nats from cookie', ()=>{
        nats = getNationalitiesFromCookie('gb,es');
        expect(nats).toBe("gb,es");
    });

    it('returns nats from environment if cookie is null', ()=>{
        nats = getNationalitiesFromCookie(null);
        expect(nats).toBe(process.env.REACT_APP_DEFAULT_NATIONALITIES);
    });

    it('returns nats from environment if cookie is empty', ()=>{
        nats = getNationalitiesFromCookie('');
        expect(nats).toBe(process.env.REACT_APP_DEFAULT_NATIONALITIES);
    });

});