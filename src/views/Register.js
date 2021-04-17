import React from 'react';

// Components

import logo from '@assets/images/logo-restvel.png';
import google from '@assets/icons/google.svg';
import facebook from '@assets/icons/facebook-white.svg';
import '@styles/views/Register.css';

const Register = ({ handleClickSignIn }) => {
  return (
    <section class="register background-images">
      <div class="register-container gradient__img-top">
        <div class="register__content">
          <figure>
            <img
              class="register__content--logo"
              src={logo}
              alt="Logo-restvel"
            />
          </figure>
          <h2 class="register__content--title">Welcome to Restvel</h2>
          <p class="register__content--subtitle">Find new ideas to try</p>
          <form class="register__content--form">
            <label for="email">
              <input
                type="email"
                id="email"
                placeholder="Email"
                class="input"
              />
            </label>
            <label for="password">
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="input"
              />
            </label>
            <label for="age">
              <input type="age" id="age" placeholder="Age" class="input" />
            </label>
            <button class="btn btn-primary btn-register" type="submit">
              Continue
            </button>
          </form>
          <div class="divLine">
            <span class="divLineText">
              <span class="line-left"></span>
              <span>OR</span>
              <span class="line-right"></span>
            </span>
          </div>
          <section class="register__content--social-media">
            <a
              href="#"
              class="btn btn-primary btn-social-media social-media-facebook"
            >
              <img src={facebook} alt="facebook-icon" />
              Continue with Facebook
            </a>
            <a
              href=""
              class="btn btn-primary btn-social-media social-media-google"
            >
              <img src={google} alt="google-icon" />
              Continue with Google
            </a>
          </section>
          <p class="register__content--sign-up">
            Not on Restvel yet? <a onClick={handleClickSignIn}>Sign in</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
