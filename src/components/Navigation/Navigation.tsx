import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import "./Navigation.scss"
import { navigation, networks } from "../../config";

type Props = {
  menuVisible: boolean;
  toggleMenu: (v: boolean) => void;
}

export const Nav: React.FC<Props> = ({ menuVisible, toggleMenu }) => {

  return (
    <nav className="navigation">
      <ul className="navigation__networks">
        {networks.map(link => (
          <Link
            to={link.href}
            className={`navigation__networks--link navigation__networks--${link.title}`}
            key={link.id}
          />
        ))}
      </ul>

      {navigation.map(link => (
        <a
          href={link.href}
          className={classNames("navigation__link", {
            "navigation__link--logo": link.title === "logo",
          })}
          key={link.id}
        >
          {link.title === "logo" ? "" : link.title}
        </a>
      ))}

      <Link
        to="/home-kitchens/order"
        className="navigation__order"
        type="button"
      >
        My Order
      </Link>

      {/* <button
        type="button"
        className="navigation__menu"
        onClick={() => toggleMenu()}
      /> */}

      {!menuVisible ? (
        <button
          type="button"
          className="navigation__button--menu navigation__button"
          onClick={() => toggleMenu(menuVisible)}
        />
      ) : (
        <button
          type="button"
          className="navigation__button--close navigation__button"
          onClick={() => toggleMenu(menuVisible)}
        />
      )}
    </nav>
  );
};