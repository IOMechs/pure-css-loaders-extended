import { useEffect, useState, Children, useRef, useCallback } from 'react';
import LoadersData, {
  LoaderCircle,
  LoaderDefault,
  LoaderDualRing,
  LoaderEllipsis,
  LoaderFacebook,
  LoaderGrid,
  LoaderHeart,
  LoaderHourglass,
  LoaderRing,
  LoaderRipple,
  LoaderRoller,
  LoaderSpinner,
} from '../../constants/getLoadersData';
import Loader from '../../Interfaces/Loader';
import { LdsAnimationDirections } from '../../LdsAnimationDirections';
import { LoaderService } from '../../LoaderService';
import Modal from '../Modal';
import './style.css';

const LoadersComponent = () => {
  const [loaders, setLoaders] = useState<Loader[] | []>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [selectedLoader, setSelectedLoader] = useState<Loader>();
  const loaderContainerRef = useRef<HTMLDivElement>(null);
  const loaderService = new LoaderService();

  function transformLoader(selectedLoader: Loader) {
    let newLoaderInfo: Loader;
    const color = 'blue';
    const size = '60px';
    switch (selectedLoader.id) {
      case LoaderCircle.id:
        newLoaderInfo = loaderService.configureLdsCircle(
          selectedLoader,
          color,
          size,
          LdsAnimationDirections.lrt
        );
        break;
      case LoaderDefault.id:
        newLoaderInfo = loaderService.configureLdsDefault(
          selectedLoader,
          color,
          size,
          LdsAnimationDirections.lrt
        );
        break;
      case LoaderDualRing.id:
        newLoaderInfo = loaderService.configureLdsDualRing(
          selectedLoader,
          color,
          size,
          LdsAnimationDirections.lrt
        );
        break;
      case LoaderEllipsis.id:
        newLoaderInfo = loaderService.configureLdsEllipsis(
          selectedLoader,
          color,
          size,
          LdsAnimationDirections.lrt
        );
        break;
      case LoaderFacebook.id:
        newLoaderInfo = loaderService.configureLdsFacebook(
          selectedLoader,
          color,
          size,
          LdsAnimationDirections.lrt
        );
        break;
      case LoaderGrid.id:
        newLoaderInfo = loaderService.configureLdsGrid(
          selectedLoader,
          color,
          size,
          LdsAnimationDirections.lrt
        );
        break;
      case LoaderHeart.id:
        newLoaderInfo = loaderService.configureLdsHeart(
          selectedLoader,
          color,
          size,
          LdsAnimationDirections.lrt
        );
        break;
      case LoaderHourglass.id:
        newLoaderInfo = loaderService.configureLdsHourGlass(
          selectedLoader,
          color,
          size,
          LdsAnimationDirections.lrt
        );
        break;
      case LoaderRing.id:
        newLoaderInfo = loaderService.configureLdsRing(
          selectedLoader,
          color,
          size,
          LdsAnimationDirections.lrt
        );
        break;
      case LoaderRipple.id:
        newLoaderInfo = loaderService.configureLdsRipple(
          selectedLoader,
          color,
          size,
          LdsAnimationDirections.lrt
        );
        break;
      case LoaderRoller.id:
        newLoaderInfo = loaderService.configureLdsRoller(
          selectedLoader,
          color,
          size,
          LdsAnimationDirections.lrt
        );
        break;
      case LoaderSpinner.id:
        newLoaderInfo = loaderService.configureLdsSpinner(
          selectedLoader,
          color,
          size,
          LdsAnimationDirections.lrt
        );
        break;
      default:
        return;
    }
    console.log(newLoaderInfo);
    const transformLoaders = loaders.map((loader: Loader) => {
      if (newLoaderInfo.id === loader.id) {
        return newLoaderInfo;
      }
      return loader;
    });
  }

  const addStyleOnDOM = useCallback(() => {
    const styleEle = document.createElement('Style');
    styleEle.innerText = loaders
      .map((loaderData) => loaderData.cssRules)
      .join('');
    if (loaderContainerRef && loaderContainerRef.current) {
      loaderContainerRef.current.append(styleEle);
    }
  }, [loaders]);

  useEffect(() => {
    setLoaders([...LoadersData]);
  }, []);

  useEffect(() => {
    addStyleOnDOM();
  }, [addStyleOnDOM]);

  const showLoaderDetails = (data: Loader) => {
    setSelectedLoader({ ...data });
    transformLoader(data);
    setModal(!modal);
  };
  const hideLoaderDetails = () => {
    setModal(!modal);
  };
  return (
    <div ref={loaderContainerRef} className="loaders-container">
      {modal && selectedLoader && (
        <Modal
          mySelectedLoader={selectedLoader}
          onOutsideClick={hideLoaderDetails}
        />
      )}
      {Children.toArray(
        loaders.map((loaderData) => (
          <div
            className="loader-body"
            onClick={() => showLoaderDetails(loaderData)}
          >
            <div dangerouslySetInnerHTML={{ __html: loaderData.html }} />
            <p className="source-text">Source &#60;&#47;&#62;</p>
          </div>
        ))
      )}
    </div>
  );
};

export default LoadersComponent;
