import { FC } from 'react';
import "./CoffeeLoader.css";

const CoffeeLoader: FC = () => {
  return (
    <div id="loader-wrapper">
      <div className="coffee-container">
        <div className="steam-container">
          <div className="steam"></div>
          <div className="steam"></div>
          <div className="steam"></div>
        </div>
        <div className="cup">
          <div className="handle"></div>
        </div>
        <div className="plate"></div>
      </div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  );
};

export default CoffeeLoader;
