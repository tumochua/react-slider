import { useState } from "react";
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
    speed: 500,
    displayElements: 3,
    sizeNext: 1,
  };

  return (
    <div className="wapper">
      <Slider {...settings}>
        {sliders &&
          sliders.map((slider) => {
            return (
              <div className="item" key={slider.id}>
                <img src={slider.image} alt={slider.id} className="image" />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default App;
