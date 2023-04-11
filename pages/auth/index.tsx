import { NextPage } from "next";
import styles from "./Auth.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import { useRouter } from "next/router";

const Auth: NextPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Image src={"/icons/logo.svg"} alt="Logo" height={40} width={200} />
      <Input
        classNames={styles.input}
        value={formData.username}
        onChange={onChange}
        name={"username"}
        placeholder={"Enter your username"}
      />
      <Input
        classNames={styles.input}
        type={"password"}
        value={formData.username}
        onChange={onChange}
        name={"username"}
        placeholder={"Enter your password"}
      />
      <Button onClick={handleLogin} classNames={styles.btn}>
        Log in
      </Button>
    </div>
  );
};

export default Auth;
