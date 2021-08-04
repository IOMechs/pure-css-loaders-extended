import "./style.css";

const Modal = ({selectedHtml="", selectedCss=""}) => {
  console.log(`\n\nfrom modal`);
  console.log(`\n\nhtml => `,selectedHtml, `\n\ncss => `,selectedCss);
  return (
    <div className="modal-container">
      <div className="modal-body">
        <div className="html-container">
          {selectedHtml}
        </div>
        <div className="css-container">
          {selectedCss}
        </div>
      </div>
    </div>
  )
}

export default Modal
