"use client";
import { useState } from "react";
import { BoxUI } from "../box";
import { ButtonUI } from "../button";
import { InputUI } from "../input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signupJWT, loginJWT } from "@/api/authFetch";
import { LinkBoxUI } from "../linkBox";
import { HStack, Separator, Text } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import { RiGoogleFill } from "react-icons/ri";
import "./style.css";

type TForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export enum AuthTypes {
  LOGIN = "login",
  SIGNUP = "signup",
}

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Auth({ type }: { type: "login" | "signup" }) {
  const queryClient = useQueryClient();
  const [authType, setAuthType] = useState<"login" | "signup">(type);
  const [error, setError] = useState<null | string>(null);
  const [form, setForm] = useState<TForm>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signup = useMutation({
    mutationFn: signupJWT,
    mutationKey: ["signup"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["signup"] });
    },
  });
  const mlogin = useMutation({
    mutationFn: loginJWT,
    mutationKey: ["login"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
  });
  //TODO: google auth
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    flow: "auth-code",
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
    const name = form.email.split("@")[0];
    const { email, password } = form;

    if (!email.match(regex)) {
      setError("Email is not correct");
      setTimeout(() => {
        setError(null);
      }, 3000);

      return;
    }
    if (authType === AuthTypes.SIGNUP) {
      signup.mutate({ name, email, password });
    } else {
      mlogin.mutate({ email, password });
    }
  };

  //TODO: xss,

  const validateForm = () => {
    return AuthTypes.SIGNUP === authType
      ? Boolean(form.email && form.password && form.confirmPassword)
      : Boolean(form.email && form.password);
  };
  //useful for single page handling
  // const toggleauthType = useCallback(() => {
  //   setAuthType((prev) =>
  //     prev === AuthTypes.LOGIN ? AuthTypes.SIGNUP : AuthTypes.LOGIN
  //   );
  //   setForm({ confirmPassword: "", email: "", password: "" });
  //   setError(null);
  // }, []);

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
        </>
      )}
      {/* error display component */}
      {error && <Text color="red.500">{error}</Text>}
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
        callback={() => {}}
        href={authType === AuthTypes.SIGNUP ? "login" : "signup"}
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
