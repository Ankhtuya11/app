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
        <View style={styles.vm6}>
          <Text style={styles.txt1}> Дагасан сэдвүүд:</Text>
        </View>
        <View style={styles.view2}>
          <ScrollView horizontal={true}>
            <View style={styles.vm2}>
              <Text style={styles.txt2}>Gantsaardal</Text>
            </View>
            <View style={styles.vm2}>
              <Text style={styles.txt2}>Gantsaardal</Text>
            </View>
            <View style={styles.vm2}>
              <Text style={styles.txt2}>Gantsaardal</Text>
            </View>
            <View style={styles.vm2}>
              <Text style={styles.txt2}>Gantsaardal</Text>
            </View>
            <View style={styles.vm2}>
              <Text style={styles.txt2}>Gantsaardal</Text>
            </View>
            <View style={styles.vm2}>
              <Text style={styles.txt2}>Gantsaardal</Text>
            </View>
            <View style={styles.vm2}>
              <Text style={styles.txt2}>Gantsaardal</Text>
            </View>
          </ScrollView>
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
    // width: 400,
    alignItems: "center",
    // justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "red",
  },
  pro1: {
    borderRadius: 30,
    flex: 1,
    height: 40,
    marginLeft: 25,
  },
  title: {
    flex: 9,
    fontSize: "20",
    marginTop: 7,
    marginLeft: 10,
  },
  txt1: {
    color: "grey",
    marginLeft: 20,
  },
  txt2: {
    marginHorizontal: 10,
    fontSize: 13,
  },
  vm2: {
    backgroundColor: "grey",
    borderRadius: 30,
    justifyContent: "center",
    // paddingHorizontal: -10,
    height: 50,
    marginHorizontal: 5,
    // paddingVertical: -5,
  },

  view2: {
    height: 50,
    backgroundColor: "yellow",
  },
});
