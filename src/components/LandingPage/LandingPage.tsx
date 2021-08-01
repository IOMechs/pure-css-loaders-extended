import './style.css';
import Header from '../Header';
import Loaders from '../Loaders';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="landing-page__content">
        <Loaders />
      </div>
    </div>
  );
};

export default LandingPage;
