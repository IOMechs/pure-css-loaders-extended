import {FC} from "react";
import Loader from "../../Interfaces/Loader";
import CleanCSS from 'clean-css';

import "./style.css";

type ModalProps = {
  mySelectedLoader: Loader;
  onOutsideClick: () => void
}

const Modal: FC<ModalProps> = ({ mySelectedLoader, onOutsideClick }) => {
  const readableCSS = new CleanCSS({format: 'beautify'}).minify(mySelectedLoader.cssRules);
  return (
    <div className="modal-container" onClick={onOutsideClick}>
      <div className="modal-body">
        <div className="html-container">
          {mySelectedLoader.html}
        </div>
        <pre className="css-container">
          {readableCSS.styles}
        </pre>
      </div>
    </div>
  )
}

export default Modal
