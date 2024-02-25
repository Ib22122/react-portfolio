import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">LOGO</div>
        <div className="rfooter d-flex flex-column">
          <ul className="navicons navbar-nav flex-row justify-content-end">
            <li className="nav-item p-1">
              <a className="nav-link active border border-secondary rounded-circle text-center " aria-current="psa2e"
                target="blank" href="https://www.linkedin.com/in/ibrahim-alsalim-7b485a2b6/"><FontAwesomeIcon className='icon'  icon={faLinkedinIn} /></a>
            </li>
            <li className="nav-item p-1">
              <a className="nav-link active border border-secondary rounded-circle text-center " href="#"><FontAwesomeIcon className='icon' icon={faFacebookF} /></a>
            </li>
            <li className="nav-item p-1">
              <a className="nav-link active border border-secondary rounded-circle text-center " href="#"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
            </li>
          </ul>
          <div className="text-secondary mt-3">--copyrights 2024-- All Rights Reserved Here By Ibrahim Alsalim </div>
        </div>
      </div>
    </div>

  )

}
export default Footer;