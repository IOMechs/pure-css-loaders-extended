import { useEffect, useState, Children, useRef } from "react";
import LoadersData from '../../constants/getLoadersData';
import Loader from "../../Interfaces/Loader";
// import Modal from "../Modal";
import './style.css';

const LoadersComponent = () => {
  const [loaders, setLoaders] = useState<Loader[] | []>([]);
  const loaderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleEle = document.createElement("Style");
    styleEle.innerText = LoadersData.map(loaderData => loaderData.cssRules).join("");
    if (loaderContainerRef && loaderContainerRef.current) {
      loaderContainerRef.current.append(styleEle);
    }
    setLoaders([...LoadersData])
  }, [])
  return (
    <div ref={loaderContainerRef} className="loaders-container">
      {/* <Modal /> */}
      {Children.toArray(
        loaders.map(loaderData => (
          <div className="loader-body" dangerouslySetInnerHTML={{ __html: loaderData.html}} />
        ))
      )}
    </div>
  )
}

export default LoadersComponent;