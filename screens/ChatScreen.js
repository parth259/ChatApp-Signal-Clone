import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";

import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

const ChatScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri:
                "https://tekrabuilders.com/wp-content/uploads/2018/12/male-placeholder-image.jpeg",
            }}
          />
          <Text style={{ color: "white", marginLeft: 20, fontWeight: "700" }}>
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{  flex: 1, backgroundColor: "white" }}>
      <Text>{route.params.chatName}</Text>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
