import { Link } from "react-router-dom";
import './Menu.scss';
import { navigation, networks } from "../../config";

type Props = {
  setMenuVisible: (v: boolean) => void;
}

export const Menu: React.FC<Props> = ({ setMenuVisible }) => {
  return (
    <menu className="menu">
      <header className="menu__header">
        <button
          type="button"
          className="menu__header--logo"
          onClick={() => setMenuVisible(false)}
        />
        <button
          type="button"
          className="menu__header--close"
          onClick={() => setMenuVisible(false)}
        />
      </header>
      <ul className="menu__list">
        {navigation.map(link =>
          link.title !== "logo"
            ? <a
              href={link.href}
              key={link.id}
              onClick={() => setMenuVisible(false)}
              className="menu__list--link"
            >
              {link.title}
            </a>
            : <></>
        )}
        <ul className="menu__networks">
          {networks.map(link => (
            <Link
              to={link.href}
              className={`menu__networks--link menu__networks--${link.title}`}
              key={link.id}
            />
          ))}
        </ul>
      </ul>
    </menu>
  );
}