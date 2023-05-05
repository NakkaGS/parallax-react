import "./parallax_2.css";

import React, { useState, useEffect } from "react";


export default function ParallaxHero() {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY); // => scroll position
    console.log(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    console.log(scrollPosition);
  }, []);

  return (
    <div className="parallax_2">
      {/* <div className="hero">
        <div className="parallax-layer layer-6"></div>
        <div className="parallax-layer layer-5"></div>
        <div className="parallax-layer layer-4"></div>
        <div className="parallax-layer bike-1"></div>
        <div className="parallax-layer bike-2"></div>
        <div className="parallax-layer layer-3"></div>
        <div className="parallax-layer layer-2"></div>
        <div className="parallax-layer layer-1"></div>
      </div> */}
      <div>
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: `${scrollPosition}px`,
          }}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/24650/5.png"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          />
        </div>
      </div>
    </div>
  );
}
