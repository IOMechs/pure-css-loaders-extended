import { useEffect, useState, Children, useRef } from "react";
import LoadersData from '../../constants/getLoadersData';
import Loader from "../../Interfaces/Loader";
import CleanCSS from 'clean-css';
import Modal from "../Modal";
import './style.css';

const LoadersComponent = () => {
  const [loaders, setLoaders] = useState<Loader[] | []>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [selectedHtml, setSelectedHtml] = useState<string>('');
  const [selectedCss, setSelectedCss] = useState<string>('');
  const loaderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleEle = document.createElement("Style");
    styleEle.innerText = LoadersData.map(loaderData => loaderData.cssRules).join("");
    if (loaderContainerRef && loaderContainerRef.current) {
      loaderContainerRef.current.append(styleEle);
    }
    setLoaders([...LoadersData])
  }, [])
  const cssCleaner = (loaderHtml="", loaderCss={}) => {
    const readableCSS = new CleanCSS({format: 'beautify'}).minify(loaderCss);
    setSelectedHtml(loaderHtml);
    setSelectedCss(readableCSS.styles);
    setModal(!modal)
    console.log(`\n\nhtml => `, selectedHtml, `\n\ncss => `, selectedCss, `\n\nmodal => `, modal);
  }
  return (
    <div ref={loaderContainerRef} className="loaders-container">
      {modal && <Modal selectedHtml={selectedHtml} selectedCss={selectedCss} />}
      {Children.toArray(
        loaders.map(loaderData => (
          <div className="loader-body" onClick={() => cssCleaner(loaderData.html, loaderData.cssRules)}>
            <div dangerouslySetInnerHTML={{ __html: loaderData.html}} />
            <p className="source-text">Source &#60;&#47;&#62;</p>
          </div>
        ))
      )}
    </div>
  )
}

export default LoadersComponent;