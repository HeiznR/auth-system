"use client";
import { useCallback, useState } from "react";
import { BoxUI } from "../ui/box";
import { ButtonUI } from "../ui/button";
import { InputUI } from "../ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "@/api/signup";
import { LinkBoxUI } from "../ui/linkBox";
import { HStack, Separator, Text } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import { RiGoogleFill } from "react-icons/ri";
import "./style.css";

type TForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

enum AuthTypes {
  LOGIN = "login",
  SIGNUP = "signup",
}

export default function Auth() {
  const queryClient = useQueryClient();
  const [authType, setAuthType] = useState<AuthTypes>(AuthTypes.SIGNUP);
  const [error, setError] = useState<null | string>(null);
  const [form, setForm] = useState<TForm>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const mutation = useMutation({
    mutationFn: signup,
    mutationKey: ["auth"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
  //TODO: google auth
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const handleFormInputs = (inputData: Partial<TForm>) => {
    setForm((prevState) => {
      const updatedForm = { ...prevState, ...inputData };
      if (updatedForm.password && updatedForm.confirmPassword) {
        setError(
          updatedForm.password !== updatedForm.confirmPassword
            ? "Passwords do not match"
            : null
        );
      }
      return updatedForm;
    });
  };

  const sendForm = () => {
    if (authType !== AuthTypes.SIGNUP) return;
    const name = form.email.split("@")[0];
    const { email, password } = form;
    mutation.mutate({ name, email, password });
  };

  //TODO: xss, email validation

  const validateForm = () => {
    return (
      Boolean(form.email && form.password && form.confirmPassword) && !error
    );
  };

  const toggleauthType = useCallback(() => {
    setAuthType((prev) =>
      prev === AuthTypes.LOGIN ? AuthTypes.SIGNUP : AuthTypes.LOGIN
    );
  }, []);
  const authLabels = {
    email: "Email address",
    password: "Password",
    confirmPassword: "Confirm password",

    [AuthTypes.LOGIN]: {
      header: `Log in`,
      AuthTypeswitch: { text: `Don't have an account? `, link: "Sign up" },
      oauth: {
        google: "Log in",
      },
    },
    [AuthTypes.SIGNUP]: {
      header: `Sign up`,
      AuthTypeswitch: { text: `Already have an account? `, link: "Log in" },
      oauth: {
        google: "Sign up",
      },
    },
  };

  return (
    <div className="wrapper">
      {/* header */}
      <BoxUI label={authLabels[authType].header} />
      {/* email adress */}
      <InputUI
        label={authLabels.email}
        name={"email"}
        value={form.email}
        callback={handleFormInputs}
      />
      {/* password */}
      <InputUI
        label={authLabels.password}
        name={"password"}
        value={form.password}
        inputType="password"
        callback={handleFormInputs}
      />
      {authType === AuthTypes.SIGNUP && (
        // confirm password
        <>
          <InputUI
            label={authLabels.confirmPassword}
            name={"confirmPassword"}
            value={form.confirmPassword}
            inputType="password"
            callback={handleFormInputs}
          />
          {error && <Text color="red.500">{error}</Text>}
        </>
      )}
      {/* send button */}
      <ButtonUI
        disabled={!validateForm()}
        callback={sendForm}
        label="Send"
        size="md"
      />
      <LinkBoxUI
        label={authLabels[authType].AuthTypeswitch.text}
        linkLabel={authLabels[authType].AuthTypeswitch.link}
        callback={toggleauthType}
      />
      {/* separator */}
      <HStack>
        <Separator flex="1" />
        <Text flexShrink="0" color={"black"}>
          Or
        </Text>
        <Separator flex="1" />
      </HStack>
      {/* oauth */}
      <div>
        {/* google */}
        <ButtonUI
          callback={() => login()}
          label={`${authLabels[authType].oauth.google} in with Google 🚀`}
          size="md"
          icon={<RiGoogleFill />}
          variant={"outline"}
        />
      </div>
    </div>
  );
}
