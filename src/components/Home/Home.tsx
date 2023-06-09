import React, { FC, useEffect, useRef } from "react";
import Navbar from "../ui/Navbar/Navbar";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../store/store";

import styles from "./Home.module.scss";
import { useSlider } from "./useSlider";
import UserCard from "../ui/UserCard/UserCard";
import { Carousel, Empty, Skeleton, Space } from "antd";
import { HomePreloader } from "./HomePreloader";

const Home: FC = () => {
  const { getUsers, updateUserDislikeInfo, updateUserLikeInfo } = useActions();

  const { data: user } = useTypedSelector(({ auth }) => auth);
  const { data: users, isLoading } = useTypedSelector(({ users }) => users);
  React.useEffect(() => {
    getUsers({ _id: user!._id });
  }, []);

  const { refs, actions } = useSlider(user, users, users);

  if (isLoading) {
    return <HomePreloader />;
  }

  if (users?.length) {
    return <Empty />;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <Carousel infinite={false} ref={refs.sliderRef} dots={false}>
            {users?.map(({ username, _id, personalization }, idx) => (
              <UserCard
                key={username}
                username={username}
                _id={_id}
                personalization={personalization}
                index={idx}
                dislike={actions.dislike}
                like={actions.like}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
