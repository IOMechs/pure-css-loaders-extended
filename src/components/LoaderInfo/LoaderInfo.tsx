import Modal from 'react-bootstrap/Modal';
import './LoaderInfo.css';
import { Badge, Form } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';
import Loader from '../../classes/Loader';
import cloneDeep from 'lodash/cloneDeep';
import Style from 'style-it';

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
              bg="secondary"
              onClick={() => {
                navigator.clipboard.writeText(loaderInfo?.html || '');
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
              navigator.clipboard.writeText(loaderInfo?.cssRules || '');
            }}
          >
            Copy
          </Badge>{' '}
          {loaderInfo?.cssRules}
        </pre>
      </Modal.Body>
    </Modal>
  );
};

export default LoaderInfo;
