import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Views
import Login from '@views/Login';
import Register from '@views/Register';
import CardHome from '@views/CardHome';

import logo from '@assets/images/logo-restvel.png';
import '@styles/pages/Home.css';

const Home = () => {
  const [isLogin, setShowLogin] = useState(false);
  const [isRegister, setShowRegister] = useState(false);

  const handleClickSignUp = () => {
    setShowLogin(false);
    setShowRegister(true);
  };
  const handleClickSignIn = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <>
      {!isLogin && !isRegister && (
        <section className="hero background-images">
          <div className="hero__container gradient__img-top">
            <figure>
              <img
                className="hero__container--logo"
                src={logo}
                alt="Logo-restvel"
              />
            </figure>
            <div className="hero__container--button">
              <a
                onClick={() => setShowLogin(true)}
                className="btn hero-btn-primary"
              >
                Login
              </a>
              <a
                onClick={() => setShowRegister(true)}
                className="btn hero-btn-secundary"
              >
                Register
              </a>
            </div>
          </div>
        </section>
      )}
      {isLogin && <Login handleClickSignUp={handleClickSignUp} />}
      {isRegister && <Register handleClickSignIn={handleClickSignIn} />}
      <CardHome />
      {!isLogin && !isRegister && (
        <section className="hero background-images">
          <div className="hero__container gradient__img-bottom">
            <figure>
              <img
                className="hero__container--logo"
                src={logo}
                alt="Logo-restvel"
              />
            </figure>
            <div className="hero__container--button">
              <a href="#" className="btn hero-btn-primary">
                Login
              </a>
              <a href="#" className="btn hero-btn-secundary">
                Register
              </a>
            </div>
          </div>
        </section>
      )}
      {isLogin && <Login handleClickSignUp={handleClickSignUp} />}
      {isRegister && <Register handleClickSignIn={handleClickSignIn} />}
    </>
  );
};

export default Home;
