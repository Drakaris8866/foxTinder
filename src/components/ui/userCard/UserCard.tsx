import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";
import { FC } from "react";
import { IPersonalization, IUser } from "../../../store/user/user.types";

import styles from "./userCard.module.scss";
import personalization from "../../Personalization/Personalization";

export type IUserForCard = Omit<IUser, "password">;

const UserCard: FC<IUserForCard> = ({
  personalization: { images, interests, gender, about },
  _id,
  username,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        {images.length !== 0 ? (
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
        <Button className={styles.btn}>
          <DislikeOutlined />
        </Button>
        <Button className={styles.btn}>
          <LikeOutlined />
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
