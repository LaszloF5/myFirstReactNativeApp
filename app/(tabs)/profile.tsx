import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const router = useRouter();

  const goToMainPage = () => {
    router.push("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/images/raccoon.jpg")}
          style={styles.image}
        />
        <View style={styles.innerText}>
          <Text style={styles.data}>Raccoon Robin</Text>
          <Text style={styles.data}>Date: 2015.02.09.</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={goToMainPage}>
        <Text style={styles.buttonText}>Go to main page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000",
  },
  innerContainer: {
    width: "80%",
    height: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
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
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 20,
    margin: "auto",
  },
  innerText: {
    margin: "auto",
  },
  data: {
    color: "white",
    fontWeight: 900,
    fontSize: 20,
  },
});

export default Profile;
