import { FC } from "react";
import { useActions } from "../../../hooks/useActions";
import { Button, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useTypedSelector } from "../../../store/store";

import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

interface INavbar {
  items?: string[];
}

const Navbar: FC<INavbar> = ({ items }) => {
  const { logout } = useActions();
  const { data: user } = useTypedSelector(({ auth }) => auth);

  if (user) {
    return (
      <div className={styles.navbar}>
        <Link to="/" className={styles.logo}>Logo</Link>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <NavLink to={"/favorite"}>Favorite</NavLink>
          </li>
        </ul>

        <div className={styles.user}>
          <Link to="/personalization">
            <div className={styles.username}>
              {user?.username}
              <UserOutlined />
            </div>
          </Link>
          <Button className={styles.logout} onClick={logout}>
            Выйти
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.user}>
          <Link to="/registration">Регистрация</Link>
          <Divider style={{backgroundColor: "#fff", height: "auto"}}  orientation="right" type="vertical" dashed={false}/>
          <Link to="/login">Войти</Link>
        </div>
      </div>
    );
  }
};

export default Navbar;
