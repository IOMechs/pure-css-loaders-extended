import Modal from 'react-bootstrap/Modal';
import './LoaderInfo.css';
import { Badge, Form } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';
import Loader from '../../classes/Loader';
import cloneDeep from 'lodash/cloneDeep';
import Style from 'style-it';
import { FaCheck } from 'react-icons/fa';

type Props = {
  modalShown: boolean;
  handleCloseModal: () => void;
  loader: Loader;
};

const LoaderInfo: React.FC<Props> = ({
  modalShown,
  handleCloseModal,
  loader,
}) => {
  const [loaderInfo, setLoaderInfo] = useState<Loader>();
  const [size, setSize] = useState<number>(parseInt(loader.size, 10));
  const [isHTMLCopied, setIsHTMLCopied] = useState(false)
  const [isCSSCopied, setIsCSSCopied] = useState(false)
  const [badgeOpacity, setBadgeOpacity] = useState({
    htmlBadgeOpacity: false,
    cssBadgeOpacity: false
  })

  const updateLoader = useCallback(() => {
    if (!loader) return;
    const sizeToUse = size;
    if (!sizeToUse) return;
    const loaderUpdated = cloneDeep(loader).transform(`${sizeToUse}px`, '');
    console.log(loaderUpdated.cssRules);
    setLoaderInfo(loaderUpdated);
  }, [loader, size]);

  useEffect(() => {
    if (loader) {
      updateLoader();
    }
  }, [loader, size, updateLoader]);

  const resetModal = () => {
    setLoaderInfo(cloneDeep(loader));
    updateSize(loader.size);
  };

  const updateSize = (sizeStr: string) => {
    setSize(parseInt(sizeStr, 10));
  };

  useEffect(()=>{
    if(isHTMLCopied){
      setTimeout(()=>{
        setIsHTMLCopied(false)
         setBadgeOpacity(prevState=>({
      ...prevState,
      htmlBadgeOpacity:false
    }))
      }, 2000)
    }
    if(isCSSCopied){
      setTimeout(() => {
        setIsCSSCopied(false)
        setBadgeOpacity(prevState=>({
          ...prevState,
          cssBadgeOpacity: false
        }))
      }, 2000);
    }
  }, [isHTMLCopied, isCSSCopied])

  const onHTMLCopyButtonPress = () => {
    setIsHTMLCopied(true);
    setBadgeOpacity(prevState=>({
      ...prevState,
      htmlBadgeOpacity: true
    }))
  }

  const onCSSCopyButtonPress = () => {
    setIsCSSCopied(true)
     setBadgeOpacity(prevState=>({
      ...prevState,
      cssBadgeOpacity: true
    }))
  }

  return (
    <Modal
      show={modalShown}
      size="lg"
      onHide={() => {
        handleCloseModal();
        resetModal();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{loaderInfo?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Style.it(
          loaderInfo?.cssRules,
          <div className="modal-loader-wrapper">
            <div
              className="modal-loader"
              dangerouslySetInnerHTML={{ __html: loaderInfo?.html || '' }}
            />
          </div>
        )}

        <Form>
          <Form.Group className="mb-3" controlId="loaderSize">
            <Form.Label>Loader Size (px)</Form.Label>
            <Form.Control
              onChange={(e) => {
                updateSize(e.target.value);
              }}
              defaultValue={size}
              type="number"
              min={10}
              max={500}
              placeholder="Enter loader size"
            />
          </Form.Group>
        </Form>
        <h6 className="modal-html-text-header">HTML</h6>
        <div contentEditable={true} suppressContentEditableWarning={true}>
          <div className="modal-html-text">
            {loaderInfo?.html}
            <Badge
              className="badge"
              contentEditable={false}
              bg={isHTMLCopied? "success" :"secondary"}
              onClick={() => {
                navigator.clipboard.writeText(loaderInfo?.html || '');
                onHTMLCopyButtonPress()
              }}
            >
              <span className="badge-text badge-text-html" 
              style={{...styles, opacity: Number(!badgeOpacity.htmlBadgeOpacity), position: 'absolute', marginLeft: '-8px'}}>
                Copy
              </span>
              <span className="badge-text badge-text-html" 
              style={{...styles, opacity: Number(badgeOpacity.htmlBadgeOpacity)}}>
                <FaCheck />
              </span>
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
            bg={isCSSCopied ? "success" :"secondary"}
            onClick={() => {
              navigator.clipboard.writeText(loaderInfo?.cssRules || '');
              onCSSCopyButtonPress()
            }}
          >
            <span className="badge-text badge-text-html" 
              style={{...styles, opacity: Number(!badgeOpacity.cssBadgeOpacity), position: 'absolute', marginLeft: '-5px'}}>
                Copy
              </span>
              <span className="badge-text badge-text-css" 
              style={{...styles, opacity: Number(badgeOpacity.cssBadgeOpacity)}}>
                <FaCheck />
              </span>
          </Badge>{' '}
          {loaderInfo?.cssRules}
        </pre>
      </Modal.Body>
    </Modal>
  );
};

export default LoaderInfo;


const styles = {
  transition: 'all 300ms ease-in-out'
};
