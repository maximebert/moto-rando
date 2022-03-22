import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../../assets/images/logo-white.png";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import "./header.scss";


const Header = ({ isLogged, handleLogout, pseudo, id }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleRezise = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleRezise);
    return () => window.removeEventListener("resize", handleRezise);
  }, []);

  // close menu when page is > 900
  useEffect(() => {
    if (size.width > 900 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((menu) => !menu);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <header className="header">
      <div className="header__content">
        <NavLink to="/">
          <img
            className="header__content__logo"
            width="130px"
            height="100px"
            src={logo}
            alt="logo du site"
          />
        </NavLink>

        <nav className={`header__content__nav ${menuOpen ? "isMenu" : ""}`}>
          <ul className="header_list">
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  `header_link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  `header_link ${isActive ? "active" : ""}`
                }
                to="/itineraires"
              >
                Listes des itinéraires
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  `header_link ${isActive ? "active" : ""}`
                }
                to="/equipe"
              >
                L'équipe
              </NavLink>
            </li>
            {!isLogged && (
              <>
                <li>
                  <NavLink
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `header_link ${isActive ? "active" : ""}`
                    }
                    to="/inscription"
                  >
                    Inscription
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `header_link ${isActive ? "active" : ""}`
                    }
                    to="/connexion"
                  >
                    Connexion
                  </NavLink>
                </li>
              </>
            )}
            {isLogged && (
              <>
                <li>
                  <NavLink
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `header_link ${isActive ? "active" : ""}`
                    }
                    to={`/profil/${id}/nouveau-itineraire`}
                  >
                    Créer un itineraire
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={closeMenu} to={`/profil/${id}`}>
                    <p className="pseudo">
                      <GiFullMotorcycleHelmet className="icon" />
                      {pseudo}
                    </p>
                  </NavLink>
                </li>

                <div className="btn__logout" onClick={handleLogout}>
                  <FiLogOut />
                </div>
              </>
            )}
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <IoCloseCircleOutline onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  pseudo: PropTypes.string,
};

Header.defaultProps = {
  pseudo: "Connecté",
};

export default React.memo(Header);
