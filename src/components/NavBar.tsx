/* IMPORT CSS */
import '../scss/NavBar.scss';

/* IMPORT IMAGES */
import Logo from '../imgs/logo.svg';

export default () => {
    return <div className="navbar fixed-top navbar-light bg-light w-100 d-flex justify-content-center justify-content-md-between">
    <a className="navbar-brand d-none d-md-inline" href="https://www.sherpany.com/" target="_blank"><img className="logo" src={Logo} alt="Sherpany Logo" /></a>
      <div className=" d-flex justify-content-center justify-content-md-between">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      </div>
  </div>
}