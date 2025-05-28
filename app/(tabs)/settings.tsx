import { useRouter } from "expo-router";
import React, { useState } from "react";
import Color from 'color';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Settings = () => {
  const router = useRouter();

  const [bgColor, setBgColor] = useState<string>("");
  const [inputBgColor, setInputBgColor] = useState<string>("");

const isValidColor = (color: string): boolean => {
    let lowerColor = color.toLowerCase();
    try {
        Color(lowerColor);
        return true;
    } catch(e) {
        return false;
    }
};

const setBackgroundColor = () => {
  let trimmedColor = inputBgColor.trim().toLowerCase();

  if (trimmedColor.length === 0) {
    Alert.alert("Alert", "Fill out this field!", [{ text: "OK" }]);
    return;
  }

  if (isValidColor(trimmedColor)) {
    setBgColor(trimmedColor);
  } else {
    trimmedColor = '';
    setBgColor(trimmedColor);
    Alert.alert("Alert", "Invalid color!", [{ text: "OK" }]);
  }
  setInputBgColor('');
};

  const goToMainPage = () => {
    router.push("/(tabs)");
  };
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: bgColor.length > 0 ? bgColor : "black" },
      ]}
    >
      <Text style={styles.title}>SETTINGS</Text>
      <TextInput
      style={styles.input}
        placeholder="Type a color"
        placeholderTextColor="#999"
        value={inputBgColor}
        onChangeText={setInputBgColor}
      />
            <TouchableOpacity onPress={setBackgroundColor} style={styles.button}>
              <Text style={styles.buttonText}>
                Modify
              </Text>
            </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToMainPage}>
        <Text style={styles.buttonText}>Go to main page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "#fff",
    marginTop: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Settings;
