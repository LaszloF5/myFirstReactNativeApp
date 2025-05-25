import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const HomeScreen = () => {
  const greeting = (name: string) => {
    return <Text style={styles.text}>Hello, {name}!</Text>;
  };

  const router = useRouter();

  const goToSettings = () => {
    router.push("/(tabs)/settings");
  };

  const goToProfile = () => {
    router.push("/(tabs)/profile");
  };

  const [count, setCount] = useState<number>(0);
  const [inputName, setInputName] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleName = () => {
    let trimmedName = inputName.trim();
    if (trimmedName.length < 1) {
      Alert.alert("Alert", "Fill out this field!", [{ text: "OK" }]);
      return;
    }
    setName(trimmedName);
    setInputName("");
  };

  const counterFunction = (): void => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Hello React Native!</Text>

      <TextInput
        style={styles.input}
        placeholder="Type your name."
        placeholderTextColor="#999"
        value={inputName}
        onChangeText={setInputName}
        //  onChangeText={(text) => setInputName(text)}
      />
      <TouchableOpacity style={[styles.btn, styles.btnSend]} onPress={handleName}>
        <Text style={styles.btnText}>
          Send
        </Text>
      </TouchableOpacity>

      {name.length > 0 && (
        <Text style={styles.text}>
          {`Welcome text:\n`}
          {greeting(name)}
        </Text>
      )}

      <Text style={styles.text}>Counter: {count}</Text>
      <TouchableOpacity style={styles.btn} onPress={counterFunction}>
        <Text style={styles.btnText}>
          Press me
        </Text>
      </TouchableOpacity>

      <Text style={styles.mainText}>
        System:
        {Platform.OS === "ios" ? "It is ios." : "Android or other."}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={goToProfile}>
        <Text style={styles.btnText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={goToSettings}>
        <Text style={styles.btnText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
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
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  mainText: {
    color: "red",
    fontSize: 20,
  },
  btn: {
    backgroundColor: "lightskyblue",
    paddingHorizontal: 24,
    paddingVertical: 12,
    margin: 10,
    borderRadius: 8,
  },
  btnSend: {
    backgroundColor: "yellowgreen",
  },
  btnText: {
    fontWeight: 900,
    fontStyle: "italic",
  },
});

export default HomeScreen;
