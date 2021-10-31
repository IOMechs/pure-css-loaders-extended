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
// import LoaderDualRing from '../classes/LoaderDualRing';
import LoaderCircle from '../classes/LoaderCircle';
import LoaderDefault from '../classes/LoaderDefault';
import LoaderEllipsis from '../classes/LoaderEllipsis';
import LoaderFacebook from '../classes/LoaderFacebook';
import LoaderGrid from '../classes/LoaderGrid';
import LoaderHeart from '../classes/LoaderHeart';
import LoaderRoller from '../classes/LoaderRoller';
import LoaderRing from '../classes/LoaderRing';
import LoaderHourglass from '../classes/LoaderHourglass';
import LoaderSpinner from '../classes/LoaderSpinner';
import LoaderRipple from '../classes/LoaderRipple';

const Loaders: Loader[] = [
  new LoaderCircle(LCircle),
  new LoaderDefault(LDefault),
  new Loader(LDualRing),
  new LoaderEllipsis(LEllipsis),
  new LoaderFacebook(LFacebook),
  new LoaderGrid(LGrid),
  new LoaderHeart(LHeart),
  new LoaderHourglass(LHourglass),
  new LoaderRing(LRing),
  new LoaderRipple(LRipple),
  new LoaderRoller(LRoller),
  new LoaderSpinner(LSpinner),
];

export default Loaders;
