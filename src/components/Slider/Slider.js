import { useState, useEffect } from "react";
import "./Slider.css";
function Slider({ children, displayElements, speed }) {
  // let [visibleChildren, setVisibleChildren] = useState(
  //   children.slice(0, displayElements) ? children.slice(0, displayElements) : 0
  // );
  let [assignDisplayElements, setAssignDisplayElements] =
    useState(displayElements);
  let [visibleChildren, setVisibleChildren] = useState(
    children.slice(0, displayElements) ? children.slice(0, displayElements) : 0
  );
  const [sizeSlider, setSizeSlider] = useState(children.length);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   hanldeNext();
    // }, speed);
    // return () => clearInterval(interval);
  }, [speed]);

  const handleBack = () => {
    setAssignDisplayElements(--assignDisplayElements);
  };
  const hanldeNext = () => {
    if (assignDisplayElements >= sizeSlider) {
      setAssignDisplayElements(displayElements);
    } else {
      setAssignDisplayElements(++assignDisplayElements);
      // setVisibleChildren(++displayElements);
    }
  };
  // console.log(assignDisplayElements, sizeSlider);
  console.log(visibleChildren);
  return (
    <div className="container">
      <span className="icon-right" onClick={handleBack}>
        <i className="fa-solid fa-chevron-left"></i>
      </span>
      {visibleChildren}
      <span className="icon-left">
        <i className="fa-solid fa-chevron-right" onClick={hanldeNext}></i>
      </span>
    </div>
  );
}

export default Slider;
