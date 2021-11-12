import Modal from 'react-bootstrap/Modal';
import React from 'react';
import './LoaderInfo.css';
import { Badge, Form, InputGroup } from 'react-bootstrap';
import { useCallback, useEffect, useRef, useState } from 'react';
import Loader from '../../classes/Loader';
import cloneDeep from 'lodash/cloneDeep';
import Style from 'style-it';
import {
  FaClipboardList,
  FaClipboardCheck,
} from 'react-icons/fa';
import { CirclePicker } from 'react-color';

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
        <h6 className="modal-html-text-header">HTML</h6>
        <div contentEditable={true} suppressContentEditableWarning={true}>
          <div className="modal-html-text">
            {loaderInfo?.html}
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
                <FaClipboardList />
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
              <FaClipboardList />
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
          {loaderInfo?.cssRules}
        </pre>
      </Modal.Body>
    </Modal>
  );
};

export default LoaderInfo;

const styles = {
  transition: 'all 300ms ease-in-out',
};
