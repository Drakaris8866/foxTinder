import { Skeleton, Space } from "antd";
import styles from "./Home.module.scss";

export const HomePreloader = () => {
  return (
    <div className={styles.container}>
      <Skeleton.Input
        active
        block
        style={{ width: "500px", height: "800px" }}
        size="large"
      />
      <Space size="middle" direction="horizontal">
        <Skeleton.Button active style={{ width: "242px" }} size="large" />
        <Skeleton.Button active style={{ width: "242px" }} size="large" />
      </Space>
    </div>
  );
};
