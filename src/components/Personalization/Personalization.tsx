import React, { FC } from "react";
import styles from "./Personalization.module.scss";
import { Button, Card, Input, Modal, Select } from "antd";
import SubTitle from "../ui/Title/SubTitle";
import { Controller, useForm } from "react-hook-form";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../store/store";
import { useModal } from "../../hooks/useModal";
import { CloseOutlined, LoadingOutlined } from "@ant-design/icons";
import { usePersonalization } from "./usePersonalization";
import { useNavigate } from "react-router-dom";
import { IUserInfo } from "../../store/user/user.types";

const { TextArea } = Input;

const interestOptions = [
  { label: "Бегать", value: "бегать" },
  { label: "Прыгать", value: "пригать" },
  { label: "Чесаться", value: "чесаться" },
  { label: "Ловить зайцев", value: "ловить зайцев" },
  { label: "Петь", value: "петь" },
  { label: "Есть", value: "есть" },
];

const Personalization: FC = () => {
  const {
    user: {
      _id,
      personalization: { images: userImages, about, gender, interests },
    },
    isLoading,
    isImageLoading,
  } = useTypedSelector(({ user }) => user);

  const { control, formState, handleSubmit } = useForm<IUserInfo>({
    mode: "onChange",
    defaultValues: {
      about,
      gender,
      interests,
    },
  });

  const { updateUserInfo } = useActions();

  const { handleCancel, handleOk, showModal, isModalOpen } = useModal();

  const { handleGetRandomImg, handleImgDelete } = usePersonalization();

  const navigate = useNavigate();

  const onSubmit = async ({ about, interests, gender, images }: IUserInfo) => {
    const res = await updateUserInfo({ about, interests, gender, _id, images });
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Modal
          className={styles.modal}
          centered
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[]}
        >
          <div className={styles.content}>
            {!isImageLoading ? (
              <>
                {userImages?.length !== 5 && (
                  <Button onClick={() => handleGetRandomImg(_id)}>
                    Выбрать случайную
                  </Button>
                )}
                <Button>Загрузить</Button>
              </>
            ) : (
                <LoadingOutlined />
            )}
          </div>
        </Modal>
        <div className={styles.cards}>
          {userImages?.map((el) => (
            <Card
              key={el}
              className={styles.card}
              cover={
                <div>
                  <CloseOutlined
                    onClick={(e) => handleImgDelete({ _id, e })}
                    className={styles.delete}
                  />
                  <img
                    className={styles.img}
                    crossOrigin="anonymous"
                    src={`${el}`}
                    alt="fox"
                  />
                </div>
              }
            />
          ))}
          {[...new Array(5 - userImages.length )].map((_, idx) => (
            <Card key={idx} className={`${styles.card} ${styles.empty}`} />
          ))}
        </div>
        <Button size="large" className={styles.add} onClick={showModal}>
          Добавить
        </Button>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <SubTitle text="Обо мне" />
          <Controller
            name="about"
            control={control}
            render={({ field }) => <TextArea {...field} size="large" />}
          />
          <SubTitle text="Интересы" />
          <Controller
            name="interests"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={interestOptions}
                mode="multiple"
                placeholder="Выберете из предложенного"
              />
            )}
          />
          <SubTitle text="Пол" />
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select
                placeholder="Выберете из предложенного"
                options={[
                  {
                    label: "Мужской",
                    value: "мужской",
                  },
                  { label: "Женский", value: "женский" },
                ]}
                {...field}
              />
            )}
          />
          <Button size="large" htmlType="submit">
            Обновить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Personalization;
