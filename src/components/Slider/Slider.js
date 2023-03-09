import { useState, useEffect } from "react";
import "./Slider.css";
function Slider({ sliders, displayElements }) {
  const [startIndex, setStartIndex] = useState(0);
  let visiblesliders = sliders.slice(startIndex, startIndex + displayElements);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(
        (prevIndex) => (prevIndex + 1) % (visiblesliders.length + 1)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [visiblesliders]);

  const handleBack = () => {
    if (startIndex <= sliders.length - displayElements) {
      setStartIndex(startIndex - 1);
      if (startIndex === 0) {
        setStartIndex(sliders.length - displayElements);
      }
    } else {
      setStartIndex(sliders.length - displayElements);
    }
  };
  const hanldeNext = () => {
    if (startIndex >= sliders.length - displayElements) {
      visiblesliders = sliders.slice(0, 0 + displayElements);
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + 1);
    }
  };
  // console.log(sliders.length - assignDisplayElements, startIndex);
  return (
    <div className="container">
      <span className="icon-right" onClick={handleBack}>
        <i className="fa-solid fa-chevron-left"></i>{" "}
      </span>
      {visiblesliders &&
        visiblesliders
          // .slice(startIndex)
          // .concat(sliders.slice(0, startIndex))
          .map((slider) => {
            return (
              <div className="item" key={slider.id}>
                <img src={slider.image} alt={slider.id} className="image" />
                <span>Ảnh {slider.id}</span>
              </div>
            );
          })}
      <span className="icon-left">
        <i className="fa-solid fa-chevron-right" onClick={hanldeNext}></i>
      </span>
    </div>
  );
}

export default Slider;
