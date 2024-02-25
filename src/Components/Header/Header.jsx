import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function Header() {
  const [activeLink, setActiveLink] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState('rgba(33, 37, 41, 1)');


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.innerWidth > 992) {
      const scrollPosition = window.scrollY;
      const opacity = 0 + scrollPosition / 16;
      setBackgroundColor(`rgba(33, 37, 41 , ${opacity})`);
    }else{
      setBackgroundColor("rgba(33, 37, 41 , 1");
    }
  };

  const handleClick = (linkId) => {
    setActiveLink(linkId);
  };
  return (
    <header className="header sticky-top my-2" >

      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: backgroundColor }}>
        <div className="container">
          <a className="navbar-brand fs-1 fw-bold" href="#">LOGO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end mx-3 mx-lg-0" id="navbarsExample04">
            <ul className="navbar-nav fs-5 mb-2 mb-md-0">
              <li className="nav-item mx-3">
                <a onClick={() => {
                  handleClick(1)
                }
                } className={activeLink === 1 ? 'active nav-link' : 'nav-link'} aria-current="page" href="#Home">Home</a>
              </li>
              <li className="nav-item mx-3">
                <a onClick={() => {
                  handleClick(2)
                }
                } className={activeLink === 2 ? 'active nav-link' : 'nav-link'} href="#Skills">Skills</a>
              </li>
              <li className="nav-item mx-3">
                <a onClick={() => {
                  handleClick(3)
                }
                } className={activeLink === 3 ? 'active nav-link' : 'nav-link'} href="#Projects">Projects</a>
              </li>
            </ul>
            <div className="right d-flex align-items-center justify-content-start">
              <ul className="navicons navbar-nav flex-row mx-2 mb-2 mb-md-0">
                <li className="nav-item p-1">
                  <a className="nav-link active border border-secondary rounded-circle text-center " aria-current="page"
                    target="blank" href="https://www.linkedin.com/in/ibrahim-alsalim-7b485a2b6/"> <FontAwesomeIcon className='icon' icon={faLinkedinIn} /></a>
                </li>
                <li className="nav-item p-1">
                  <a className="nav-link active border border-secondary rounded-circle text-center " href="#">
                    <FontAwesomeIcon className='icon' icon={faFacebookF} /></a>
                </li>
                <li className="nav-item p-1">
                  <a className="nav-link active border border-secondary rounded-circle text-center " href="#"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                </li>
              </ul>
              <div>
                <a href="#connect" className="btn btn-dark border rounded-0 px-5 py-3 fw-bold">let's connect</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </header>
  );
}

export default Header;