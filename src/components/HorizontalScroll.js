import React from 'react';

const HorizontalScroll = () => {
  return (
    <section class="hero background-images">
      <div class="hero__container gradient__img-top">
        <figure>
          <img
            class="hero__container--logo"
            src="./src/assets/images/logo-restvel.png"
            alt="Logo-restvel"
          />
        </figure>
        <div class="hero__container--button">
          <a href="#" class="btn hero-btn-primary">
            Login
          </a>
          <a href="#" class="btn hero-btn-secundary">
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
