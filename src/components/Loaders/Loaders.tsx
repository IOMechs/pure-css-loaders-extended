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
import Modal from 'react-bootstrap/Modal';
import './style.css';
import CleanCSS from 'clean-css';
import { Badge } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const LoadersComponent = () => {
  const [loaders, setLoaders] = useState<Loader[] | []>([]);
  const [modalShown, setModalShown] = useState(false);

  const handleCloseModal = () => setModalShown(false);
  const handleShowModal = () => setModalShown(true);

  const [selectedLoader, setSelectedLoader] = useState<Loader>();
  const loaderContainerRef = useRef<HTMLDivElement>(null);
  const loaderService = new LoaderService();

  let readableCSS: any;
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
    // const transformLoaders = loaders.map((loader: Loader) => {
    //   if (newLoaderInfo.id === loader.id) {
    //     return newLoaderInfo;
    //   }
    //   return loader;
    // });
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
    readableCSS = new CleanCSS({ format: 'beautify' }).minify(data.cssRules);
    setSelectedLoader({ ...data, cssRules: readableCSS.styles });
    transformLoader(data);
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
      <Modal show={modalShown} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedLoader?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="modal-loader"
            dangerouslySetInnerHTML={{ __html: selectedLoader?.html || '' }}
          />
          <h6 className="modal-html-text-header">HTML</h6>
          <div contentEditable={true} suppressContentEditableWarning={true}>
            <div className="modal-html-text">
              {selectedLoader?.html}
              <Badge
                className="badge"
                contentEditable={false}
                bg="secondary"
                onClick={() => {
                  navigator.clipboard.writeText(selectedLoader?.html || '');
                }}
              >
                Copy
              </Badge>{' '}
            </div>
          </div>
          <div
            style={{
              marginTop: '10px',
              marginBottom: '10px',
              backgroundColor: '#333',
              height: '1px',
              width: '100%',
            }}
          ></div>
          <h6 className="modal-css-text-header">CSS</h6>
          <pre
            contentEditable={true}
            suppressContentEditableWarning={true}
            className="css-container"
          >
            <Badge
              className="badge"
              contentEditable={false}
              bg="secondary"
              onClick={() => {
                navigator.clipboard.writeText(selectedLoader?.cssRules || '');
              }}
            >
              Copy
            </Badge>{' '}
            {selectedLoader?.cssRules}
          </pre>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoadersComponent;
