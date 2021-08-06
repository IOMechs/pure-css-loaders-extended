import { useEffect, useState, Children, useRef } from "react";
import LoadersData from '../../constants/getLoadersData';
import Loader from "../../Interfaces/Loader";
import Modal from "../Modal";
import './style.css';

const LoadersComponent = () => {
  const [loaders, setLoaders] = useState<Loader[] | []>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [selectedLoader, setSelectedLoader] = useState<Loader>();
  const loaderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleEle = document.createElement("Style");
    styleEle.innerText = LoadersData.map(loaderData => loaderData.cssRules).join("");
    if (loaderContainerRef && loaderContainerRef.current) {
      loaderContainerRef.current.append(styleEle);
    }
    setLoaders([...LoadersData])
  }, [])
  const showLoaderDetails = (data:Loader) => {
    setSelectedLoader({...data})
    setModal(!modal)
  }
  const hideLoaderDetails = () => {
    setModal(!modal);
  }
  return (
    <div ref={loaderContainerRef} className="loaders-container">
      {modal && selectedLoader && <Modal mySelectedLoader={selectedLoader} onOutsideClick={hideLoaderDetails} />}
      {Children.toArray(
        loaders.map(loaderData => (
          <div className="loader-body" onClick={() => showLoaderDetails(loaderData)}>
            <div dangerouslySetInnerHTML={{ __html: loaderData.html}} />
            <p className="source-text">Source &#60;&#47;&#62;</p>
          </div>
        ))
      )}
    </div>
  )
}

export default LoadersComponent;