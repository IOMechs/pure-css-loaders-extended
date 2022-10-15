import Modal from 'react-bootstrap/Modal';
import React from 'react';
import './LoaderInfo.css';
import { Badge, Form, InputGroup, Button } from 'react-bootstrap';
import { useCallback, useEffect, useRef, useState } from 'react';
import Loader from '../../classes/Loader';
import cloneDeep from 'lodash/cloneDeep';
import Style from 'style-it';
import { FaCopy, FaClipboardCheck, FaHtml5 } from 'react-icons/fa';
import { SiCss3 } from 'react-icons/si';
import { MdClose } from 'react-icons/md';
import { CirclePicker } from 'react-color';
import { appColors } from '../../constants/color';

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
  const [isHTMLCopied, setIsHTMLCopied] = useState(false);
  const [isCSSCopied, setIsCSSCopied] = useState(false);
  const [badgeOpacity, setBadgeOpacity] = useState({
    htmlBadgeOpacity: false,
    cssBadgeOpacity: false,
  });
  const [color, setColor] = useState<string>(loader.color);
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  let colorInputRef = useRef<any>();

  const updateLoader = useCallback(() => {
    if (!loader) return;
    const sizeToUse = size;
    if (!sizeToUse) return;
    const loaderUpdated = cloneDeep(loader).transform(
      `${sizeToUse}px`,
      color ? color : '#333'
    );
    console.log(loaderUpdated.cssRules);
    setLoaderInfo(loaderUpdated);
  }, [loader, size, color]);

  useEffect(() => {
    if (loader) {
      updateLoader();
    }
  }, [loader, size, updateLoader]);

  const resetModal = () => {
    setLoaderInfo(cloneDeep(loader));
    updateSize(loader.size);
    setColor(loader.color);
    toggleColorPickerShow(false);
  };

  const updateSize = (sizeStr: string) => {
    setSize(parseInt(sizeStr, 10));
  };

  useEffect(() => {
    if (isHTMLCopied) {
      setTimeout(() => {
        setIsHTMLCopied(false);
        setBadgeOpacity((prevState) => ({
          ...prevState,
          htmlBadgeOpacity: false,
        }));
      }, 2000);
    }
    if (isCSSCopied) {
      setTimeout(() => {
        setIsCSSCopied(false);
        setBadgeOpacity((prevState) => ({
          ...prevState,
          cssBadgeOpacity: false,
        }));
      }, 2000);
    }
  }, [isHTMLCopied, isCSSCopied]);

  const onHTMLCopyButtonPress = () => {
    setIsHTMLCopied(true);
    setBadgeOpacity((prevState) => ({
      ...prevState,
      htmlBadgeOpacity: true,
    }));
  };

  const onCSSCopyButtonPress = () => {
    setIsCSSCopied(true);
    setBadgeOpacity((prevState) => ({
      ...prevState,
      cssBadgeOpacity: true,
    }));
  };

  const toggleColorPickerShow = (show: boolean) => {
    setShowColorPicker(show);
  };

  const closeModal = () => {
    handleCloseModal();
    resetModal();
  };

  return (
    <Modal
      show={modalShown}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={closeModal}
    >
      <div className="modal-content-container">
        <Modal.Header>
          <Modal.Title>{loaderInfo?.name}</Modal.Title>
          <Button variant="danger" onClick={() => closeModal()}>
            <MdClose />
          </Button>
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
            <Form.Label>Loader Color (Hex / Rgb)</Form.Label>
            <InputGroup className="mb-3 color-picker-group">
              <Form.Control
                ref={colorInputRef}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                onFocus={() => {
                  toggleColorPickerShow(true);
                }}
                onBlur={() => {
                  setTimeout(() => {
                    toggleColorPickerShow(false);
                  }, 200);
                }}
                value={color}
                placeholder="Pick loader color"
              />
              <InputGroup.Text
                onClick={() => {
                  if (colorInputRef) {
                    colorInputRef.current.focus();
                  }
                }}
              >
                <div
                  style={{ backgroundColor: color, width: 20, height: 20 }}
                ></div>
              </InputGroup.Text>

              {showColorPicker && (
                <div className="color-picker-group__picker-container">
                  <CirclePicker
                    onChangeComplete={({ hex }) => {
                      setColor(hex);
                    }}
                  />
                </div>
              )}
            </InputGroup>
          </Form>
          <div className="modal-section-container">
            <div className="modal-heading-text-container">
              <FaHtml5 color={appColors.htmlOrange} />
              <h6 className="modal-html-text-header">HTML</h6>
            </div>
            <pre contentEditable={true} suppressContentEditableWarning={true}>
              <div className="modal-html-text">{loaderInfo?.html}</div>
              <Badge
                className="badge badge-icon"
                contentEditable={false}
                bg={isHTMLCopied ? 'success' : 'secondary'}
                onClick={() => {
                  navigator.clipboard.writeText(loaderInfo?.html || '');
                  onHTMLCopyButtonPress();
                }}
              >
                <span
                  style={{
                    ...styles,
                    opacity: Number(!badgeOpacity.htmlBadgeOpacity),
                    position: 'absolute',
                  }}
                >
                  <FaCopy />
                </span>
                <span
                  style={{
                    ...styles,
                    opacity: Number(badgeOpacity.htmlBadgeOpacity),
                  }}
                >
                  <FaClipboardCheck />
                </span>
              </Badge>{' '}
            </pre>
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
          <div className="modal-section-container">
            <div className="modal-heading-text-container">
              <SiCss3 color={appColors.cssBlue} />
              <h6 className="modal-html-text-header">CSS</h6>
            </div>
            <pre
              contentEditable={true}
              suppressContentEditableWarning={true}
              className="css-container"
            >
              <Badge
                className="badge badge-icon"
                contentEditable={false}
                bg={isCSSCopied ? 'success' : 'secondary'}
                onClick={() => {
                  navigator.clipboard.writeText(loaderInfo?.cssRules || '');
                  onCSSCopyButtonPress();
                }}
              >
                <span
                  style={{
                    ...styles,
                    opacity: Number(!badgeOpacity.cssBadgeOpacity),
                    position: 'absolute',
                  }}
                >
                  <FaCopy />
                </span>
                <span
                  style={{
                    ...styles,
                    opacity: Number(badgeOpacity.cssBadgeOpacity),
                  }}
                >
                  <FaClipboardCheck />
                </span>
              </Badge>{' '}
              <div className="modal-css-text">{loaderInfo?.cssRules}</div>
            </pre>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default LoaderInfo;

const styles = {
  transition: 'all 300ms ease-in-out',
};
