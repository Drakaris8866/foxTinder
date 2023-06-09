import { FC } from "react";
import { Alert, Button, Input } from "antd";

import styles from "./AuthForm.module.scss";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { IUnamePassword } from "../../store/user/user.types";
import Title from "../ui/Title/Title";
import { useTypedSelector } from "../../store/store";

type FormData = {
  username: string;
  password: string;
};

const AuthForm: FC = () => {
  const { isLoading, errors } = useTypedSelector(({ auth }) => auth);

  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  const { registration, login } = useActions();

  const { formState, handleSubmit, control } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = async ({ username, password }: IUnamePassword) => {
    if (pathname === "/registration") {
      const res = await registration({ username, password });
    } else if (pathname === "/login") {
      const res = await login({ username, password });
    }

    state ? navigate(`${state.from.pathname}`) : navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Title
          text={`${pathname === "/registration" ? "Registration" : "Login"} `}
        />
        {errors && <Alert message={errors} type="error" showIcon />}
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input {...field} bordered={false} placeholder="UserName" />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input {...field} bordered={false} placeholder="Password" />
          )}
        />
        <Button loading={isLoading} htmlType="submit" size="large">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
