import { useEffect, useState, Children, useRef, useCallback } from 'react';
import LoadersData from '../../constants/getLoadersData';
import './style.css';
import LoaderInfo from '../LoaderInfo';
import Loader from '../../classes/Loader';

const LoadersComponent = () => {
  const [loaders, setLoaders] = useState<Loader[] | []>([]);
  const [modalShown, setModalShown] = useState(false);

  const handleCloseModal = () => setModalShown(false);
  const handleShowModal = () => setModalShown(true);

  const [selectedLoader, setSelectedLoader] = useState<Loader | null>(null);
  const loaderContainerRef = useRef<HTMLDivElement>(null);

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

  const showLoaderDetails = (loader: Loader) => {
    setSelectedLoader(loader);
    handleShowModal();
  };

  return (
    <div ref={loaderContainerRef} className="loaders-container">
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
      {selectedLoader && (
        <LoaderInfo
          loader={selectedLoader}
          modalShown={modalShown}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default LoadersComponent;
