import { View, Text } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/Colors";
import { useNavigation } from "expo-router";

export default function OptionCard({ option, selectedTraveler }) {
  const navigation = useNavigation();
  return (
    <View
      style={[
        {
          padding: 25,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.LIGHT_GRAY,
          borderRadius: 15,
        },
        selectedTraveler?.id == option?.id && { borderWidth: 3 },
      ]}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          {option?.title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit",
            color: Colors.GRAY,
          }}
        >
          {option?.desc}
        </Text>
      </View>
      <Text style={{ fontSize: 40 }}>{option.icon}</Text>
    </View>
  );
}
