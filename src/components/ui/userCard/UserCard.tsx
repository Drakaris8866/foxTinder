import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";
import { FC, useEffect } from "react";

import styles from "./userCard.module.scss";
import axios from "axios";
import { IUserForCard } from "../../../store/users/users.types";


const UserCard: FC<IUserForCard> = ({
  personalization: { images, interests, gender, about },
  _id,
  username,
  dislike,
  like,
}) => {
  useEffect(() => {
    async function fetchD() {
      const { image } = await axios
        .get("https://randomfox.ca/floof/?ref=apilist.fun")
        .then((res) => res.data);
    }

    fetchD();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.front}>
        {images?.length !== 0 ? (
          <Carousel dotPosition="top" autoplay>
            {images?.map((img) => (
              <div className={styles.content} key={username}>
                <img
                  className={styles.img}
                  crossOrigin="anonymous"
                  src={`${img}`}
                  alt="fox"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className={styles.filler} />
        )}
        <div className={styles.info}>
          <div className={styles.username}>{username}</div>
          <div className={styles.gender}>{gender}</div>
          <div className={styles.about}>{about}</div>
        </div>
      </div>
      <div className={styles.actions}>
        <Button onClick={() => dislike(_id)} className={styles.btn}>
          <DislikeOutlined />
        </Button>
        <Button onClick={() => like(_id)} className={styles.btn}>
          <LikeOutlined />
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
