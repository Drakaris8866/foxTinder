import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../store/store";

import styles from "./Favorite.module.scss";
import { NavLink } from "react-router-dom";
import { Skeleton } from "antd";

export const Favorite = () => {
  const { getFavoriteUsers } = useActions();
  const { data: user } = useTypedSelector(({ auth }) => auth);
  const { data: favoriteUsers, isLoading } = useTypedSelector(
    ({ favorite }) => favorite
  );
  useEffect(() => {
    getFavoriteUsers(user._id);
  }, []);
  if (isLoading) {
    return (
      <>
        <Skeleton.Input active block className={styles.loader} size="large" />
        <Skeleton.Input active block className={styles.loader} size="large" />
        <Skeleton.Input active block className={styles.loader} size="large" />
      </>
    );
  }

  if (favoriteUsers?.length === 0) {
    return <div>Нет понравившихся</div>;
  }

  return (
    <div className={styles.favorite}>
      <ul className={styles.favorite__messages}>
        {favoriteUsers?.map((favUser, idx) => (
          <li className={styles.favorite__message} key={idx}>
            <div className={styles.header}>
              <div className={styles.header__meta}>
                {favUser.users[0].personalization?.images[0] ? (
                  <img
                    className={styles.header__image}
                    src={favUser.users[0].personalization?.images[0]}
                    alt="Avatar"
                  />
                ) : (
                  <img
                    className={styles.header__image}
                    src="https://img.freepik.com/free-vector/fox-head-flat-style_1308-112771.jpg?w=1380&t=st=1684603414~exp=1684604014~hmac=e9be614c2b7fe7585c9d792098c9536ad39a51fcb3ff48ad8e631b6c3b1cd49b"
                    alt="Avatar"
                  />
                )}

                <p>{favUser.users[0].username}</p>
              </div>
              <div className={styles.header__info}>
                <p>Пол: {favUser.users[0].personalization.gender}</p>
                <p>
                  Интересы:{" "}
                  {favUser.users[0].personalization.interests.join(", ")}
                </p>
              </div>
            </div>
            <div className="content">
              <NavLink to={`/room/${favUser.roomId}`}>
                <div>sdd</div>
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
