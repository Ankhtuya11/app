
import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
export default function TestScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
      </Text>

   
      
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.main}>
          <ScrollView horizontal={true}>
                <View style={styles.vm2}>
                <Text style={styles.txt2}>Ганцаардал</Text>
                </View>
                <View style={styles.vm2}>
                <Text style={styles.txt2}>Стресс</Text>
                </View>
                <View style={styles.vm2}>
                <Text style={styles.txt2}>Гэр бүлийн харилцаа</Text>
                </View>
                <View style={styles.vm2}>
                <Text style={styles.txt2}>Хайр дурлал</Text>
                </View>
                <View style={styles.vm2}>
                <Text style={styles.txt2}>Зорилго</Text>
                </View>
                <View style={styles.vm2}>
                <Text style={styles.txt2}>Сэтгэл хөдлөл</Text>
                </View>
                <View style={styles.vm2}>
                <Text style={styles.txt2}>#crush</Text>
                </View>
                <View style={styles.vm2}>
                <Text style={styles.txt2}>#seendelt</Text>
                </View>
            </ScrollView>
          </View>
          <View style={styles.havtan}>
                <View>
                <Text style={styles.cl}>Үнэгүй</Text>
              <Text style={styles.bold}>Хэрэглэгчийн судалгаа</Text>
                </View>
                <Image style={styles.zurag}
    source={require("../../src/images/natural.jpg")}
    />

          </View>
          <View style={styles.havtan}>
                <View>
                <Text style={styles.cl}>Үнэгүй</Text>
              <Text style={styles.bold}>Хэрэглэгчийн судалгаа</Text>
                </View>
                <Image style={styles.zurag}
    source={require("../../src/images/natural.jpg")}
    />

          </View>
          <View style={styles.havtan}>
                <View>
                <Text style={styles.cl}>Үнэгүй</Text>
              <Text style={styles.bold}>Хэрэглэгчийн судалгаа</Text>
                </View>
                <Image style={styles.zurag}
    source={require("../../src/images/natural.jpg")}
    />

          </View>
          <View style={styles.havtan}>
                <View>
                <Text style={styles.cl}>Үнэгүй</Text>
              <Text style={styles.bold}>Хэрэглэгчийн судалгаа</Text>
                </View>
                <Image style={styles.zurag}
    source={require("../../src/images/natural.jpg")}
    />

          </View>
          <View style={styles.havtan}>
                <View>
                <Text style={styles.cl}>Үнэгүй</Text>
              <Text style={styles.bold}>Хэрэглэгчийн судалгаа</Text>
                </View>
                <Image style={styles.zurag}
    source={require("../../src/images/natural.jpg")}
    />

          </View>
          
        </ScrollView>
    </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({


  vm2: {
    marginBottom:10,
    // backgroundColor: "#EBECF0",
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
    justifyContent: "center",
    // paddingHorizontal: -10,
    height: 35,
    marginHorizontal: 5,
    // paddingVertical: -5,
  },
  txt2: {
    marginHorizontal: 10,
    fontSize: 13,
    color: "#202020",
  },
  havtan:{
    height: 140,
    backgroundColor: "white",
    borderRadius: 15,
    width: "95%",
    // marginLeft: 10,
    marginTop: 10,
    marginLeft: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    
  },
  zurag:{
    width: 80,
    height: 100,
    borderRadius: 10,
  },
  container:{
    // backgroundColor: "#E5E5E5"
  },
  bold:{
    fontWeight: "bold",
  },
  cl:{
    color: "#ff6700",
    fontWeight: "bold",
  }
 










});

