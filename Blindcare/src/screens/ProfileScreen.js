import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  Octicons,
  SimpleLineIcons,
} from "react-native-vector-icons";

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {/* <View id="field" style={styles.field}> */}
          <View style={styles.vm1_2}>
            <Image
              style={styles.pro1_2}
              source={require("../../src/images/natural.jpg")}
            />
            <View>
              <Text style={styles.name}>Dangoo</Text>
              <Text id="ner" style={styles.name2}>
                anhtuyamoon@gmail.com
              </Text>
            </View>
          </View>
        </View>

        {/* </View> */}
        <View style={styles.zuraas}></View>
        <View style={styles.ug1}>
          <Ionicons name="heart-outline" style={styles.ico1} />
          <Text style={styles.txt1}>ankhtuya zurh x div</Text>
        </View>
        <View style={styles.zuraas}></View>
        <View style={styles.ug1}>
          <Ionicons name="gift-outline" style={styles.ico1} />
          <Text style={styles.txt1}>1ankhtuya zurh x div</Text>
        </View>
        <View style={styles.zuraas}></View>
        <View style={styles.ug1}>
          <Ionicons name="people-outline" style={styles.ico1} />
          <Text style={styles.txt1}>2222222ankhtuya zurh x div</Text>
        </View>
        <View style={styles.zuraas}></View>
        <View style={styles.ug1}>
          <Ionicons name="newspaper-outline" style={styles.ico1} />
          <Text style={styles.txt1}>3ankhtuya zurh x div</Text>
        </View>
        <View style={styles.zuraas}></View>
        <View style={styles.ug1}>
          <SimpleLineIcons name="bell" style={styles.ico1} />
          <Text style={styles.txt1}>4ankhtuya zurh x div</Text>
        </View>
        <View style={styles.zuraas}></View>
        <View style={styles.ug1}>
          <SimpleLineIcons name="lock-open" style={styles.ico1} />
          <Text style={styles.txt1}>5ankhtuya zurh x div</Text>
        </View>
        <View style={styles.zuraas}></View>
        <View style={styles.ug1}>
          <Ionicons name="trash-outline" style={styles.ico1} />
          <Text style={styles.txt1}>6ankhtuya zurh x div</Text>
        </View>
        <View style={styles.zuraas}></View>
        <View style={styles.ugnuud}>
          <Text style={styles.txt1}>6ankhtuya zurh x div</Text>
          <Text style={styles.txt1}>6ankhtuya zurh x div</Text>
          <Text style={styles.txt1}>6ankhtuya zurh x div</Text>
          <Text style={styles.txt1}>6ankhtuya zurh x div</Text>
          <Text style={styles.txt1}>6ankhtuya zurh x div</Text>

          <View style={styles.meregjilten}></View>
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
    backgroundColor: "#EBECF0",
  },
  // field: {
  //   marginTop: 5,
  //   backgroundColor: "red",
  //   // justifyContent: "center",
  //   height: 245,
  //   width:'100%',

  // },
  vm1_2: {
    flexDirection: "row",
    height: 80,
    // width: 400,
    // alignItems: "center",
    // justifyContent: "center",
    borderWidth: 0,
    backgroundColor: "white",
    width: 390,
  },
  pro1_2: {
    borderRadius: 400,

    height: 50,
    marginLeft: 20,
    marginTop: 10,
    width: 50,
  },
  name: {
    fontSize: "17",
    marginLeft: 10,
    fontWeight: "bold",
    marginTop: 18,
  },
  name2: {
    fontSize: "15",
    marginLeft: 10,
  },
  ug1: {
    backgroundColor: "white",
    height: 64,
    marginTop: 0,
    width: 390,
    flexDirection: "row",
    alignItems: "center",
  },
  ico1: {
    fontSize: 30,
    // marginTop:10,
    marginLeft: 25,
    color: "#202020",
  },
  txt1: {
    // marginTop:15,
    marginLeft: 30,
    fontWeight: "bold",
    color: "#202020",
  },
  zuraas: {
    height: 1,
    width: "70%",
    backgroundColor: "#EBECF0",
    justifyContent: "center",
    marginLeft: 15,
  },
  ugnuud: {
    backgroundColor: "white",
    height: 300,
    justifyContent: "space-evenly",
    marginLeft: -20,
  },
  meregjilten: {
    width: 360,
    height: 50,
    borderRadius: 10,
    backgroundColor: "grey",
    marginLeft: 20,
  },
});
