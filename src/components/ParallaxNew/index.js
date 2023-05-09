import "./parallax.css";

import { useRef, useState } from "react";

//Helpers
import useClickOutside from "../../helpers/clickOutside";

import React from "react";

import concert_img from "../../assets/img/concert.jpg";

export default function ParallaxNew() {
  const [showMenu, setShowMenu] = useState(false);

  const mobilemenu = useRef();

  useClickOutside(mobilemenu, () => {
    setShowMenu(false);
  });
  
  return (
    <div class="wrapper">
      <div class="parallax__group hero-container rellax">
        <div class="parallax__layer sky"></div>
        <div class="parallax__layer buildings"></div>
        <div class="parallax__layer grass"></div>
        <div class="parallax__layer tree"></div>
        <div class="parallax__layer road_lamp_bench"></div>
        <div class="parallax__layer people1"></div>
        <div class="parallax__layer people2"></div>
        <div class="parallax__layer hero-text">
          <h2>Parallax React</h2>
          <button
            type="button"
            className="navbar-toggler"
            id="navbar-toggler"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}>
            <i className="fas fa-bars"></i>
          </button>
          <div className="navbar-collapse" ref={mobilemenu}>
            <ul>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#workshop">Workshop</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#agenda">Agenda</a>
              </li>
              <li>
                <a href="#contact" class="btn">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div class="year-container">
            <h1>T</h1>
            <h1>E</h1>
            <h1>S</h1>
            <h1>T</h1>
          </div>
          <div class="social-container">
            <a href="https://github.com/KiaanCastillo">
              <i class="icon ion-logo-github"></i>
            </a>
            <a href="https://www.instagram.com/craftedbykiaan/">
              <i class="icon ion-logo-instagram"></i>
            </a>
            <a href="https://dribbble.com/kiaancastillo">
              <i class="icon ion-logo-dribbble"></i>
            </a>
            <a href="https://www.youtube.com/c/KiaanCastillo">
              <i class="icon ion-logo-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="spikes spikes-inverted spikes-white"></div>
      <div class="parallax__group info-container">
        <img src={concert_img} alt="Lively and colourful concert" />
        <div class="text-container">
          <h2>This is your year.</h2>
          <p>What would life be if we had no courage to attempt anything?</p>
          <p>- Vincent Van Gogh</p>
          <a href="#btn" class="btn-dark">
            Get Started Now
          </a>
        </div>
      </div>

      <div className="spikes spikes-white"></div>
      <div class="parallax__group info-container pink">
        <img src={concert_img} alt="Lively and colourful concert" />
        <div class="text-container">
          <h2>This is your year.</h2>
          <p>What would life be if we had no courage to attempt anything?</p>
          <p>- Vincent Van Gogh</p>
          <a href="#btn" class="btn-dark">
            Get Started Now
          </a>
        </div>
      </div>
      <div className="spikes spike-pink"></div>

      <div class="parallax__group hero-container">
        <div class="parallax__layer sky"></div>
        <div class="parallax__layer buildings"></div>
        <div class="parallax__layer grass"></div>
        <div class="parallax__layer tree"></div>
        <div class="parallax__layer road_lamp_bench"></div>

        <div class="parallax__layer hero-text">
          <h2>Parallax React</h2>

          <div class="year-container">
            <h1>2</h1>
            <h1>0</h1>
            <h1>1</h1>
            <h1>9</h1>
          </div>
          <div class="social-container">
            <a href="https://github.com/KiaanCastillo">
              <i class="icon ion-logo-github"></i>
            </a>
            <a href="https://www.instagram.com/craftedbykiaan/">
              <i class="icon ion-logo-instagram"></i>
            </a>
            <a href="https://dribbble.com/kiaancastillo">
              <i class="icon ion-logo-dribbble"></i>
            </a>
            <a href="https://www.youtube.com/c/KiaanCastillo">
              <i class="icon ion-logo-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="spikes spikes-inverted spikes-white"></div>
      <div class="parallax__group info-container">
        <img src={concert_img} alt="Lively and colourful concert" />
        <div class="text-container">
          <h2>This is your year.</h2>
          <p>What would life be if we had no courage to attempt anything?</p>
          <p>- Vincent Van Gogh</p>
          <a href="#btn" class="btn-dark">
            Get Started Now
          </a>
        </div>
      </div>

      <div className="spikes spikes-white"></div>
    </div>
  );
}
