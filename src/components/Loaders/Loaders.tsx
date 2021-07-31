import { useEffect, useState, Children } from "react";
import LoadersData from '../../constants/getLoadersData';
import Loader from "../../Interfaces/Loader";
import './style.css';

const LoadersComponent = () => {
  const [loaders, setLoaders] = useState<Loader[] | []>([]);

  useEffect(() => {
    const styleEle = document.createElement("Style");
    styleEle.innerText = LoadersData.map(loaderData => loaderData.cssRules).join("");
    document.head.appendChild(styleEle);
    setLoaders([...LoadersData])
  }, [])
  return (
    <div className="loaders-container">
      {Children.toArray(
        loaders.map(loaderData => (
          <div dangerouslySetInnerHTML={{ __html: loaderData.html}} />
        ))
      )}
    </div>
  )
}

export default LoadersComponent;