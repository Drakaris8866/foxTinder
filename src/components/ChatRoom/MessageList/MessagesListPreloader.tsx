import { Skeleton } from "antd";
import styles from './MessageList.module.scss'

export const MessagesListPreloader = () => {
  return (
    <div className={styles.messages}>
      <Skeleton.Input block active style={{ height: "500px" }}></Skeleton.Input>
    </div>
  );
};
