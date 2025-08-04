import authStore from "@/stores/AuthStore";
import React from "react";

export const Auth = () => {
  return <button onClick={() => authStore.toggleIsLoggedIn()}>{"click"}</button>;
};
