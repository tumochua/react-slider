import { useState, useEffect, Fragment } from "react";
import "./App.css";
import Slider from "./components/Slider";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [sliders, setSlider] = useState([
    {
      id: 1,
      image: require("./accset/images/image1.jpg"),
    },
    {
      id: 2,
      image: require("./accset/images/image2.jpg"),
    },
    {
      id: 3,
      image: require("./accset/images/image3.jpg"),
    },
    {
      id: 4,
      image: require("./accset/images/image4.jpg"),
    },
    {
      id: 5,
      image: require("./accset/images/image5.jpg"),
    },
    {
      id: 6,
      image: require("./accset/images/image6.jpg"),
    },
    {
      id: 7,
      image: require("./accset/images/image7.jpg"),
    },
    {
      id: 8,
      image: require("./accset/images/image8.jpg"),
    },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    displayElements: 4,
    sizeNext: 1,
  };

  return (
    <div>
      <Slider {...settings} sliders={sliders}>
        {/* {sliders &&
          sliders.map((slider) => {
            return (
              <div className="item" key={slider.id}>
                <img src={slider.image} alt={slider.id} className="image" />
              </div>
            );
          })} */}
      </Slider>
      <MyComponent />
    </div>
  );
}

export default App;

function MyComponent() {
  const [numbers, setNumbers] = useState(
    Array.from({ length: 10 }, (_, i) => i + 1)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numbers.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [numbers]);
  return (
    <div>
      {numbers
        .slice(currentIndex)
        .concat(numbers.slice(0, currentIndex))
        .map((number) => {
          return <span key={number}>{number} </span>;
        })}
    </div>
  );
}
