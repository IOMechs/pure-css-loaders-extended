import LCircle from '../assets/lds-circle.json';
import LDefault from '../assets/lds-default.json';
import LDualRing from '../assets/lds-dual-ring.json';
import LEllipsis from '../assets/lds-ellipsis.json';
import LFacebook from '../assets/lds-facebook.json';
import LGrid from '../assets/lds-grid.json';
import LHeart from '../assets/lds-heart.json';
import LHourglass from '../assets/lds-hourglass.json';
import LRing from '../assets/lds-ring.json';
import LRipple from '../assets/lds-ripple.json';
import LRoller from '../assets/lds-roller.json';
import LSpinner from '../assets/lds-spinner.json';
import Loader from '../classes/Loader';
import LoaderDualRing from '../classes/LoaderDualRing';
import LoaderFacebook from '../classes/LoaderFacebook';
import LoaderHeart from '../classes/LoaderHeart';

const Loaders: Loader[] = [
  new Loader(LCircle),
  new Loader(LDefault),
  new LoaderDualRing(LDualRing),
  new Loader(LEllipsis),
  new LoaderFacebook(LFacebook),
  new Loader(LGrid),
  new LoaderHeart(LHeart),
  new Loader(LHourglass),
  new Loader(LRing),
  new Loader(LRipple),
  new Loader(LRoller),
  new Loader(LSpinner),
];
export default Loaders;
