import React, { useState } from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};

  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/8/8d/Signal-Logo.svg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autofocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button containerStyle={styles.button} type="outline" title="Register" />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {},
  button: {},
});
