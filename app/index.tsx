import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Login from "../component/Login";
import React from "react";
import { auth } from "../configs/FirebaseConfig";
import { Redirect } from "expo-router";

export default function Index() {
  const user = auth.currentUser;

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      {user ? <Redirect href={"/mytrip" as any} /> : <Login />}
    </GestureHandlerRootView>
  );
}
