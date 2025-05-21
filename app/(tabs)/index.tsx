import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from "react-native";


const HomeScreen = () => {
    const greeting = (name: string) => {
        return <Text style={styles.text}>Hello, {name}!</Text>
    }

    const [count, setCount] = useState<number>(0);

    const counterFunction = (): void => {
        setCount(count + 1);
    }

  return (<View style={styles.container}>
    <Text style={styles.mainText}>Hello React Native!</Text>
    <Text style={styles.text}>Üdvözlő szöveg:</Text>
    {greeting('Anna')}
    <Text style={styles.text}>State kezelés:</Text>
    <Text style={styles.text}>Számláló: {count}</Text>
    <Button onPress={counterFunction} title='Press me'></Button>
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#000",
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  mainText: {
    color: 'red',
    fontSize: 20,
  }
});

export default HomeScreen;