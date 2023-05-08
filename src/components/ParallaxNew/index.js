import "./parallax.css";

import React from "react";

import concert_img from "../../assets/img/concert.jpg";

export default function ParallaxNew() {
  return (
    <div class="wrapper">
      <div class="parallax__group hero-container rellax">
        <div class="parallax__layer sky"></div>
        <div class="parallax__layer bushes"></div>
        <div class="parallax__layer water"></div>
        <div class="parallax__layer people1"></div>
        <div class="parallax__layer people2"></div>
        {/* <div class="parallax__layer people3"></div> */}
        <div class="parallax__layer hero-text">
          <h2>Parallax React</h2>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Workshop</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Agenda</a>
            </li>
            <li>
              <a href="#" class="btn">
                Contact us
              </a>
            </li>
          </ul>
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

      <div className="spikes"></div>
      <div class="parallax__group info-container">
        <img src={concert_img} alt="Lively and colourful concert" />
        <div class="text-container">
          <h2>This is your year.</h2>
          <p>What would life be if we had no courage to attempt anything?</p>
          <p>- Vincent Van Gogh</p>
          <a href="#" class="btn-dark">
            Get Started Now
          </a>
        </div>
      </div>

      <div className="spikes"></div>
      <div class="parallax__group info-container">
        <img src={concert_img} alt="Lively and colourful concert" />
        <div class="text-container">
          <h2>This is your year.</h2>
          <p>What would life be if we had no courage to attempt anything?</p>
          <p>- Vincent Van Gogh</p>
          <a href="#" class="btn-dark">
            Get Started Now
          </a>
        </div>
      </div>

      <div class="parallax__group hero-container">
        <div class="parallax__layer sky"></div>
        <div class="parallax__layer bushes"></div>
        <div class="parallax__layer water"></div>
        <div class="parallax__layer people1"></div>
        <div class="parallax__layer people2"></div>
        {/* <div class="parallax__layer people3"></div> */}
        <div class="parallax__layer hero-text">
          <h2>Parallax React</h2>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Workshop</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Agenda</a>
            </li>
            <li>
              <a href="#" class="btn">
                Contact us
              </a>
            </li>
          </ul>
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

      <div className="spikes"></div>
      <div class="parallax__group info-container">
        <img src={concert_img} alt="Lively and colourful concert" />
        <div class="text-container">
          <h2>This is your year.</h2>
          <p>What would life be if we had no courage to attempt anything?</p>
          <p>- Vincent Van Gogh</p>
          <a href="#" class="btn-dark">
            Get Started Now
          </a>
        </div>
      </div>

      <div className="spikes"></div>
    </div>
  );
}
