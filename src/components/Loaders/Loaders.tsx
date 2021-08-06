import { useEffect, useState, Children, useRef } from 'react';
import LoadersData, { LoaderCircle } from '../../constants/getLoadersData';
import Loader from '../../Interfaces/Loader';
import { LdsAnimationDirections } from '../../LdsAnimationDirections';
import { LoaderService } from '../../LoaderService';
import './style.css';

const LoadersComponent = () => {
  const [loaders, setLoaders] = useState<Loader[] | []>([]);
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
  return (
    <div ref={loaderContainerRef} className="loaders-container">
      {Children.toArray(
        loaders.map((loaderData) => (
          <div
            onClick={() => goToService(loaderData)}
            dangerouslySetInnerHTML={{ __html: loaderData.html }}
          />
        ))
      )}
    </div>
  );
};

export default LoadersComponent;
