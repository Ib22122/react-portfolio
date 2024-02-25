import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

function Home() {
  const words = ["FrontEnd Developer", "BackEnd Developer", "Software Engineering"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [dynamicText, setDynamicText] = useState('');

  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);
      setDynamicText("Alsalim, " + currentChar);
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        setWordIndex(!isDeleting ? (wordIndex + 1) % words.length : wordIndex);
      }
    };
    const speed = isDeleting ? 100 : 400;
    const timeout = setTimeout(() => {
      typeEffect();
    }, speed);
    return () => clearTimeout(timeout);
  }, [wordIndex, charIndex, isDeleting, words]);
  return (
    <div id="Home" className="home">
      <div className="container" >
        <div className="row">
          <div className="col-md-7 col-12 py-3">
            <span className="welcome gradient-bg"> Welcome All To My Portfolio</span>
            <div className="maintext fw-bold my-3">
              <span className="static-text">Hi! I'm Ibrahim <br /> Mohamed <br /></span>
              <span className="dynamic-text">{dynamicText}<span className="pointer"> </span></span>
            </div>
            <div className="text-secondary">Hello Everyone , i Have 3 years of Experience in Web Developer</div>
            <div className="d-flex align-items-center fs-5 fw-bold mt-5">let's connect <a href='#connect'><FontAwesomeIcon className='arrowicon' icon={faArrowRight} /></a> </div>
          </div>
          <div className="col-md-5 col-12 py-3">
            <div className="img-div">
              <div className="image-container">
                <img src="./img2.svg" alt="the img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

