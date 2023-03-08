import {FC} from 'react'
import {useActions} from "../../../hooks/useActions";
import {Button} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useTypedSelector} from "../../../store/store";

import styles from './Navbar.module.scss'
import {Link} from 'react-router-dom';

interface INavbar {
    items?: string[]
}

const Navbar: FC<INavbar> = ({items}) => {
    const {logout} = useActions()
    const {username} = useTypedSelector(({user}) => user.user)

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                Logo
            </div>
            {
                items && <ul className={styles.menu}>
                    {items.map(item => <li className={styles.item} key={item}>{item}</li>)}
                </ul>
            }

            <div className={styles.user}>
                <Link to="/personalization">
                    <div className={styles.username}>
                        {username}
                        <UserOutlined/>
                    </div>
                </Link>
                <Button className={styles.logout} onClick={logout}>Выйти</Button>
            </div>
        </div>
    );
}

export default Navbar;