import React from "react";
import "./settings.css";
import Instagram from "../../Assets/Images/87390.png";
import Telegram from "../../Assets/Images/telegram.png";
import Loader from "../../Assets/Images/loader.svg";

function Settings() {
  return (
    <div className="settings">
      <div className="container">
        <h1 className="settings__heading">Bizning saytimiz sozlanmoqda</h1>
        <img className="loader" src={Loader} alt="loader img" />

        <div className="links">
          <h3 className="links__heading">Biz bilan bog'lanish:</h3>
          <ul className="links__list">
            <li className="links__list__item">
              <a
                href="http://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="links__list__item__link"
              >
                <div className="img-wrapper">
                  <img
                    className="links__list__item__img"
                    src={Instagram}
                    alt="instra og"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="links__list__item__text">Instagram</p>
              </a>
            </li>
            <li className="links__list__item">
              <a
                className="links__list__item__link"
                href="http://www.telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="img-wrapper">
                  <img
                    className="links__list__item__img"
                    src={Telegram}
                    alt="instra og"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="links__list__item__text">Telegram</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Settings;
