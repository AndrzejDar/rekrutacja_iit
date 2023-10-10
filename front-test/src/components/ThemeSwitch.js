import React, { useState } from "react";
import { Switch, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice } from "../reducers/app";

const ThemeSwitch = () => {
  const isDarkTheme = useSelector((state) => state.app.darkTheme);

  const dispatch = useDispatch();

  const onChangeHandler = () => {
    dispatch(appSlice.actions.setDarkTheme(!isDarkTheme));
  };

  return (
    <VStack>
      <p>Dark theme</p>
      <Switch colorScheme="teal" size="lg" onChange={onChangeHandler} />
    </VStack>
  );
};

export default ThemeSwitch;
