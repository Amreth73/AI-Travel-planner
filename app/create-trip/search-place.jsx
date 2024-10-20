import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import "react-native-get-random-values";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CreateTripContext } from "../../context/CreateTripContext";
// import { CreateTripContext } from "";
export default function SearchPlace() {
  const navigaion = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(() => {
    navigaion.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
    // console.log(EXPO_PUBLIC_GOOGLE_MAP_KEY);
  }, []);
  useEffect(() => {
    console.log(tripData);
    console.log(process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY);

    router.push("./select-traveler");
  }, [tripData]);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search Place"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          console.log(details.geometry.location);
          console.log(details?.url);
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            },
          });
          router.push("/create-trip/search-traveler");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 25,
          },
        }}
      />
    </View>
  );
}
