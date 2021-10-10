import './style.css';
import logo from '../../assets/logo/iomechs-logo.png';
import GitHubButton from 'react-github-btn';

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
          <GitHubButton
            href="https://github.com/iomechs/pure-css-loaders"
            data-icon="octicon-star"
            aria-label="Star iomechs/pure-css-loaders on GitHub"
          >
            Star
          </GitHubButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
