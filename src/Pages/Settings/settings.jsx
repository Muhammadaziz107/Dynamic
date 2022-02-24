import React from "react";
import "./settings.css";
import Instagram from "../../Assets/Images/87390.png";
import Telegram from "../../Assets/Images/telegram.png";
import Loader from "../../Assets/Images/loader.svg";
import Logo from "../../Assets/Images/logo.png";

function Settings() {
  return (
    <div className="settings">
      <div className="container">
        <img className="logo" src={Logo} alt="loader img" width={200} />

        <h1 className="settings__heading">Sayt sozlanmoqda</h1>
        <img className="loader" src={Loader} alt="loader img" />

        <div className="links">
          <h3 className="links__heading">Biz bilan bog'lanish:</h3>
          <ul className="links__list">
            <li className="links__list__item">
              <a
                href="https://instagram.com/dynamic_uz?utm_medium=copy_link"
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
                href="https://t.me/dynamic_dc"
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
