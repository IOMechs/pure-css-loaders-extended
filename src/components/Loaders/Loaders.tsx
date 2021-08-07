import { useEffect, useState, Children, useRef } from 'react';
import LoadersData, { LoaderCircle } from '../../constants/getLoadersData';
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

  function goToService(selectedLoader: Loader) {
    const newLoaderInfo: Loader = loaderService.configureLdsCircle(
      selectedLoader,
      'red',
      '80px',
      LdsAnimationDirections.lrt
    );
    const transformLoaders = loaders.map((loader: Loader) => {
      if (newLoaderInfo.id === loader.id) {
        return newLoaderInfo;
      }
      return loader;
    });
    switch (selectedLoader.id) {
      case LoaderCircle.id:
        console.log(transformLoaders);
        break;
      default:
        console.log('default works');
    }
  }
  function applyStyles() {
    const styleEle = document.createElement('Style');
    styleEle.innerText = loaders
      .map((loaderData) => loaderData.cssRules)
      .join('');
    if (loaderContainerRef && loaderContainerRef.current) {
      loaderContainerRef.current.append(styleEle);
    }
  }
  useEffect(() => {
    setLoaders([...LoadersData]);
  }, []);
  useEffect(() => {
    applyStyles();
  }, [loaders]);
  const showLoaderDetails = (data: Loader) => {
    setSelectedLoader({ ...data });
    goToService(data);
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
