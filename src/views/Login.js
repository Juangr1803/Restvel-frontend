import React from 'react';
import { Link } from 'react-router-dom';

// Components

import logo from '@assets/images/logo-restvel.png';
import google from '@assets/icons/google.svg';
import facebook from '@assets/icons/facebook-white.svg';
import '@styles/views/Login.css';

const Login = ({ handleClickSignUp }) => {
  return (
    <section class="login background-images">
      <div class="login-container gradient__img-top">
        <div class="login__content">
          <figure>
            <img class="login__content--logo" src={logo} alt="Logo-restvel" />
          </figure>
          <h2 class="login__content--title">Welcome to Restvel</h2>
          <form class="login__content--form">
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
            <div class="login__content--remember-me">
              <a href="#">Forgot your password?</a>
            </div>
            <button class="btn btn-primary btn-login" type="submit">
              Login
            </button>
          </form>
          <div class="divLine">
            <span class="divLineText">
              <span class="line-left"></span>
              <span>OR</span>
              <span class="line-right"></span>
            </span>
          </div>
          <section class="login__content--social-media">
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
          <p class="login__content--sign-up">
            Not on Restvel yet?
            <a onClick={handleClickSignUp}>Sign up</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
