import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PrincipalCard from '@components/PrincipalCard';

import ironManFly from '@assets/images/iron-man-fly.jpg';
import ironManHead from '@assets/images/iron-man-head.jpg';
import ironManArmor from '@assets/images/iron-man-armor.jpg';
import logo from '@assets/images/logo-restvel.png';
import '@styles/views/CardHome.css';

const CardHome = () => {
  return (
    <section class="card">
      <div class="card__container">
        <div class="card-item">
          <h2 class="card-item__title">Search for an idea</h2>
          <p class="card-item__body">
            What do you want to try next? Search for something you're
            into--like.
          </p>
          <div class="card-item__multimedia">
            <p class="card-item__multimedia--search">
              <span class="background-images"></span> Iron man
            </p>
            <div class="card-item__mutimedia--picture">
              <figure className="mutimedia-center">
                <img src={ironManFly} alt="iron-man-fly" />
              </figure>
              <figure className="mutimedia-down">
                <img src={ironManHead} alt="iron-man-head" />
              </figure>
              <figure className="mutimedia-up">
                <img src={ironManArmor} alt="iron-man-armor" />
              </figure>
            </div>
            <div class="card-item__mutimedia--image-gradient background-images">
              <div class="card-image-gradient"></div>
            </div>
          </div>
        </div>
        <div class="card-item background-red">
          <div class="card-item__img-cp background-images"></div>
          <h2 class="card-item__title title-save">Save ideas you like</h2>
          <p class="card-item__body">
            Collect your favorites so you can get back to them later
          </p>
          <div class="card-item__multimedia-save background-images">
            <h5>Favorites Heroes</h5>
            <div class="card-item__mutimedia-save--picture">
              <figure>
                <img src={ironManFly} alt="iron-man-fly" />
              </figure>
              <figure>
                <img src={ironManHead} alt="iron-man-head" />
              </figure>
              <figure>
                <img src={ironManArmor} alt="iron-man-armor" />
              </figure>
            </div>
          </div>
        </div>
        <div class="card-item background-blue">
          <div class="card-item__img-hulk background-images"></div>
          <h2 class="card-item__title title-save">
            Make it, try it, do it, share it
          </h2>
          <p class="card-item__body">
            The best part of Restvel is trying new things and discovering what
            you love.
          </p>
          <div class="card-item__multimedia-share">
            <figure class="img__center">
              <img src={ironManFly} alt="iron-man-fly" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHome;
