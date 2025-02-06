"use client";
import { useState } from "react";
import { BoxUI } from "../ui/box";
import { ButtonUI } from "../ui/button";
import { InputUI } from "../ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "@/api/signup";

type TAuth = {
  email: string;
  password: string;
};

export default function Auth() {
  const [form, setForm] = useState<TAuth>({ email: "", password: "" });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: signup,
    mutationKey: ["signup"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["signup"] });
      console.log("success");
    },
  });

  const handleFormInputs = (inputData: Partial<TAuth>) => {
    setForm((prevState) => ({
      ...prevState,
      ...inputData,
    }));
  };

  const sendForm = () => {
    mutation.mutate({
      name: "Uladzislau",
      email: "test123@gmail.com",
      password: "veryStrongPassword",
    });
  };

  return (
    <div
      style={{
        width: "500px",
        height: "auto",
        borderRadius: "40px",
        boxShadow: "0 0 10px 0px silver",
        padding: "30px",
      }}
    >
      <BoxUI label="Sign in to your account" />
      <InputUI
        label="Email address"
        name={"email"}
        value={form.email}
        callback={handleFormInputs}
      />
      <InputUI
        label="Password"
        name={"password"}
        value={form.password}
        callback={handleFormInputs}
      />
      <ButtonUI callback={sendForm} label="Send" size="md" />
    </div>
  );
}
