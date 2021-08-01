import './style.css';
import logo from '../../assets/logo/iomechs-logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <a
          href="https://iomechs.com"
          rel="noopener noreferrer"
          target="_blank"
          className="logo_container"
        >
          <img className="logo" src={logo} alt="IOMechs Logo" />
        </a>
        <div className="title header_text">Pure CSS Loaders (configurable)</div>
        <div className="repo_link_container header_text">
          <span> Like Pure CSS Loaders? Give our repo a &nbsp; </span>
          <a
            className="github-button"
            href="https://github.com/iomechs/pure-css-loaders"
            data-icon="octicon-star"
            aria-label="Star ntkme/github-buttons on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
