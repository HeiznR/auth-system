"use client";
import React from "react";
import { observer } from "mobx-react-lite";
import authStore from "@/stores/AuthStore";

export const Header = observer(() => {
  return <div>{authStore.isLoggedIn ? "isLoggedIn" : "isNotLoggedIn"}</div>;
});
