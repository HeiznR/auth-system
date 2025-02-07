"use client";
import { useState } from "react";
import { BoxUI } from "../ui/box";
import { ButtonUI } from "../ui/button";
import { InputUI } from "../ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "@/api/signup";
import { LinkBoxUI } from "../ui/linkBox";
import { HStack, Separator, Stack, Text } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import { RiGoogleFill } from "react-icons/ri";
import "./style.css";

type TAuth = {
  email: string;
  password: string;
};

export default function Auth() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  const [form, setForm] = useState<TAuth>({ email: "", password: "" });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: signup,
    mutationKey: ["signup"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["signup"] });
    },
  });

  const handleFormInputs = (inputData: Partial<TAuth>) => {
    setForm((prevState) => ({
      ...prevState,
      ...inputData,
    }));
  };

  //mock data
  const sendForm = () => {
    mutation.mutate({
      name: "Uladzislau",
      email: "test123@gmail.com",
      password: "veryStrongPassword",
    });
  };

  return (
    <div className="wrapper">
      <BoxUI label="Log in" />
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
      <LinkBoxUI />
      <HStack>
        <Separator flex="1" />
        <Text flexShrink="0" color={"black"}>
          Or
        </Text>
        <Separator flex="1" />
      </HStack>
      <ButtonUI
        callback={() => login()}
        label="Sign in with Google 🚀"
        size="md"
        icon={<RiGoogleFill />}
        variant={"outline"}
      />
    </div>
  );
}
