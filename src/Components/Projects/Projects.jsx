import React, { useState } from 'react';
import MyProjects from "./MyProjects";
function Projects() {
  const [activeComponent, setActiveComponent] = useState(<MyProjects />);
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (btnId) => {
    setActiveButton(btnId);
  };

  const renderComponent1 = () => {
    setActiveComponent(<MyProjects />);
  };
  const renderNothing = () => {
    setActiveComponent(null);
  };
  const renderComponent3 = () => {
    setActiveComponent(<p className='text-center'> My name is ibrahim , i live in aleppo , and this is my <br /> projects</p>);
  };
  
  return (
    <div className="projects" id="Projects">
      <div className="projectsheader text-center">
        <div className="container">
        <h3>My Project</h3>
        <p> My name is ibrahim , i live in aleppo , and this is my <br /> projects</p>

        <div className='btns'>
          <button
            className={activeButton === 1 ? 'active' : ''}
            onClick={() => {
              renderComponent1()
              handleClick(1)
            }
            }
          >1st section </button>
          <button
            className={activeButton === 2 ? 'active' : ''}
            onClick={() => {
              renderNothing()
              handleClick(2)
            }
            }
          >2nd section</button>
          <button
            className={activeButton === 3 ? 'active' : ''}
            onClick={() => {
             renderComponent3()
              handleClick(3)
            }
            }
          >3rd section</button>
        </div>
        </div>

      </div>
      <div className='content'>
        {activeComponent}
      </div>
    </div>
  );
}

export default Projects;



