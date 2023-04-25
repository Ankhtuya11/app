import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.vm1}>
          <Image
            style={styles.pro1}
            source={require("../../src/images/natural.jpg")}
          />
          <Text style={styles.title}>Onoodor her baina?</Text>
        </View>
        <View>
          <Text style={styles.txt1}> Дагасан сэдвүүд</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  vm1: {
    flexDirection: "row",
    height: 60,
    width: 400,
    alignItems: "center",
    // justifyContent: "center",
    borderWidth: 1,
  },
  pro1: {
    borderRadius: 30,
    width: 40,
    height: 40,
    marginLeft: 25,
  },
  title: {
    fontSize: "20",
    marginTop: 7,
    marginLeft: 10,
  },
  txt1: {
    color: "grey",
    marginLeft: 20,
  },
});
