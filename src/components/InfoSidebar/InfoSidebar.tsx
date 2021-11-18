import { useState } from 'react';
import { FaInfo, FaChevronRight } from 'react-icons/fa';
import './InfoSidebar.css';

const InfoSidebar = () => {
  const [toggleInfoSidebar, setToggleInfoSidebar] = useState(false);
  return (
    <>
      <div
        onClick={() => setToggleInfoSidebar(!toggleInfoSidebar)}
        className={`fade info-sidebar-overlay ${
          toggleInfoSidebar ? 'show' : ''
        }`}
      ></div>
      <div className={`info-sidebar  ${toggleInfoSidebar ? 'show' : ''}`}>
        <div className="info-sidebar__info-btn-container">
          <div
            onClick={() => setToggleInfoSidebar(!toggleInfoSidebar)}
            className="info-sidebar__info-btn-container__info-btn"
          >
            {toggleInfoSidebar ? <FaChevronRight /> : <FaInfo />}
          </div>
        </div>
        <div
          className={`info-sidebar_content ${toggleInfoSidebar ? 'show' : ''}`}
        >
          <h4 className="info-sidebar_content__heading">How to use</h4>
          <ul className="info-sidebar_content__steps">
            <li>Click the loader you want</li>
            <li>Select a color and the size (optional)</li>
            <li>Copy CSS to your CSS file</li>
            <li>Copy HTML to where you need a loader</li>
            <li>Done</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfoSidebar;
