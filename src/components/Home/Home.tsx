import React, { FC } from "react";
import Navbar from "../ui/Navbar/Navbar";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../store/store";
import UserCard from "../ui/userCard/UserCard";

import styles from "./Home.module.scss";

const Home: FC = () => {
  const { getUsers } = useActions();

  const { users } = useTypedSelector(({ user }) => user);

  React.useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Navbar items={["item1", "item2", "item3"]} />
      <div className={styles.container}>
        <div className={styles.row}>
          {users.map(({ username, _id, personalization }) => (
            <UserCard
              key={username}
              username={username}
              _id={_id}
              personalization={personalization}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
