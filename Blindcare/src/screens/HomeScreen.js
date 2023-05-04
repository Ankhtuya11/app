import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import {  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  Octicons,
  AntDesign,} from "@expo/vector-icons"
import { EvilIcons, FontAwesome } from "expo-vector-icons";
 
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
          <View style={styles.vm1}>
          <Image
            style={styles.pro1}
            source={require("../../src/images/natural.jpg")}
          />
          <Text style={styles.title}>Өнөөдөр хэр байна?</Text>
          </View>
                <View style={styles.dagasan} >
                <Text style={styles.txt1}> Дагасан сэдвүүд:</Text>
                </View>
                <View style={styles.view2}>
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





    <View id="field" style={styles.field} >
    <View style={styles.vm1_2}>
    <Image
    style={styles.pro1_2}
    source={require("../../src/images/natural.jpg")}
    />
        <View>
          <Text style={styles.name}>Gatsuurhan<Entypo name="emoji-sad" style={styles.emoji}  /></Text>
          <Text id="ner" style={styles.name2}>11min</Text> 
          
        </View> 
        
    </View>     
              
              
              <View style={styles.vm2_2}>
                <Text style={styles.txt2_2}>Ганцаардал</Text>
              </View>
    
                <View>
                <Text style={styles.setgegdel}>Lorem Ipsum is simply dummy text of the printing and typesettina to make a type five centuries, but also the leap into electronic typesetting, remaining essentially uncha</Text>
                <Text style={styles.setgegdel1}>0 сэтгэгдэл</Text>
                </View>
                <View style={styles.zuraas}></View>
                <View style={styles.icon}>
                <AntDesign name="like2" style={styles.Icon1} />
                <FontAwesome name="comment-o" style={styles.Icon1} />
                <AntDesign name="sharealt" style={styles.Icon1} />
                </View>
    </View>
    <View id="field" style={styles.field} >
    <View style={styles.vm1_2}>
    <Image
    style={styles.pro1_2}
    source={require("../../src/images/natural.jpg")}
    />
        <View>
          <Text style={styles.name}>Gatsuurhan<Entypo name="emoji-sad" style={styles.emoji}/></Text>
          <Text id="ner" style={styles.name2}>11min</Text> 
          
        </View> 
        
    </View>     
              
              
              <View style={styles.vm2_2}>
                <Text style={styles.txt2_2}>Ганцаардал</Text>
              </View>
    
                <View>
                <Text style={styles.setgegdel}>Lorem Ipsum is simply dummy text of the printing and typesettina to make a type five centuries, but also the leap into electronic typesetting, remaining essentially uncha</Text>
                <Text style={styles.setgegdel1}>0 сэтгэгдэл</Text>
                </View>
                <View style={styles.zuraas}></View>
                <View style={styles.icon}>
                <AntDesign name="like2" style={styles.Icon1} />
                <FontAwesome name="comment-o" style={styles.Icon1} />
                <AntDesign name="sharealt" style={styles.Icon1} />
                </View>
    </View>
    <View id="field" style={styles.field} >
    <View style={styles.vm1_2}>
    <Image
    style={styles.pro1_2}
    source={require("../../src/images/natural.jpg")}
    />
        <View>
          <Text style={styles.name}>Gatsuurhan<Entypo name="emoji-sad" style={styles.emoji}/></Text>
          <Text id="ner" style={styles.name2}>11min</Text> 
          
        </View> 
        
    </View>     
              
              
              <View style={styles.vm2_2}>
                <Text style={styles.txt2_2}>Ганцаардал</Text>
              </View>
    
                <View>
                <Text style={styles.setgegdel}>Lorem Ipsum is simply dummy text of the printing and typesettina to make a type five centuries, but also the leap into electronic typesetting, remaining essentially uncha</Text>
                <Text style={styles.setgegdel1}>0 сэтгэгдэл</Text>
                </View>
                <View style={styles.zuraas}></View>
                <View style={styles.icon}>
                <AntDesign name="like2" style={styles.Icon1} />
                <FontAwesome name="comment-o" style={styles.Icon1} />
                <AntDesign name="sharealt" style={styles.Icon1} />
                </View>
    </View>
    <View id="field" style={styles.field} >
    <View style={styles.vm1_2}>
    <Image
    style={styles.pro1_2}
    source={require("../../src/images/natural.jpg")}
    />
        <View>
          <Text style={styles.name}>Gatsuurhan<Entypo name="emoji-sad" style={styles.emoji}/></Text>
          <Text id="ner" style={styles.name2}>11min</Text> 
          
        </View> 
        
    </View>     
              
              
              <View style={styles.vm2_2}>
                <Text style={styles.txt2_2}>Ганцаардал</Text>
              </View>
    
                <View>
                <Text style={styles.setgegdel}>Lorem Ipsum is simply dummy text of the printing and typesettina to make a type five centuries, but also the leap into electronic typesetting, remaining essentially uncha</Text>
                <Text style={styles.setgegdel1}>0 сэтгэгдэл</Text>
                </View>
                <View style={styles.zuraas}></View>
                <View style={styles.icon}>
                <AntDesign name="like2" style={styles.Icon1} />
                <FontAwesome name="comment-o" style={styles.Icon1} />
                <AntDesign name="sharealt" style={styles.Icon1} />
                </View>
    </View>
    <View id="field" style={styles.field} >
    <View style={styles.vm1_2}>
    <Image
    style={styles.pro1_2}
    source={require("../../src/images/natural.jpg")}
    />
        <View>
          <Text style={styles.name}>Gatsuurhan<Entypo name="emoji-sad" style={styles.emoji}/></Text>
          <Text id="ner" style={styles.name2}>11min</Text> 
          
        </View> 
        
    </View>     
              
              
              <View style={styles.vm2_2}>
                <Text style={styles.txt2_2}>Ганцаардал</Text>
              </View>
    
                <View>
                <Text style={styles.setgegdel}>Lorem Ipsum is simply dummy text of the printing and typesettina to make a type five centuries, but also the leap into electronic typesetting, remaining essentially uncha</Text>
                <Text style={styles.setgegdel1}>0 сэтгэгдэл</Text>
                </View>
                <View style={styles.zuraas}></View>
                <View style={styles.icon}>
                <AntDesign name="like2" style={styles.Icon1} />
                <FontAwesome name="comment-o" style={styles.Icon1} />
                <AntDesign name="sharealt" style={styles.Icon1} />
                </View>
    </View>
    <View id="field" style={styles.field} >
    <View style={styles.vm1_2}>
    <Image
    style={styles.pro1_2}
    source={require("../../src/images/natural.jpg")}
    />
        <View>
          <Text style={styles.name}>Gatsuurhan <Entypo name="emoji-sad" style={styles.emoji}/></Text>
          <Text id="ner" style={styles.name2}>11min</Text> 
          
        </View> 
        
    </View>     
              
              
              <View style={styles.vm2_2}>
                <Text style={styles.txt2_2}>Ганцаардал</Text>
              </View>
    
                <View>
                <Text style={styles.setgegdel}>Lorem Ipsum is simply dummy text of the printing and typesettina to make a type five centuries, but also the leap into electronic typesetting, remaining essentially uncha</Text>
                <Text style={styles.setgegdel1}>0 сэтгэгдэл</Text>
                </View>
                <View style={styles.zuraas}></View>
                <View style={styles.icon}>
                <AntDesign name="like2" style={styles.Icon1} />
                <FontAwesome name="comment-o" style={styles.Icon1} />
                <AntDesign name="sharealt" style={styles.Icon1} />
                </View>
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
  // title: {
  //   fontSize: 20,
  //   // fontWeight: "bold",
  //   marginBottom: 20,
  //   backgroundColor: "#EBECF0",
  // },
  vm1: {
    flexDirection: "row",
    height: 60,
    // width: 400,
    alignItems: "center",
    // justifyContent: "center",
    borderWidth: 0,
    backgroundColor: "white",
  },
  pro1: {
    borderRadius: 400,
    flex: 1,
    height: 40,
    marginLeft: 25,
  },


  title: {
    flex: 9,
    fontSize: 17,
    marginLeft: 10,
    color: "#2f2f2f",
  },

  txt1: {
    color: "#6f6f6f",  
    marginLeft: 10,
  },
  txt2: {
    marginHorizontal: 10,
    fontSize: 13,
    color: "#202020",
  },
  vm2: {
    backgroundColor: "#EBECF0",
    borderRadius: 30,
    justifyContent: "center",
    // paddingHorizontal: -10,
    height: 35,
    marginHorizontal: 5,
    // paddingVertical: -5,
  },

  view2: {
    height: 50,
    backgroundColor: "white",
    marginTop: 0,
  },
  // undsenvw1:{
  //   height: 100,
  //   borderColor
  // },
  // pro2:{
  //   borderRadius: 30,
  //   flex: 1,
  //   height: 40,
  //   marginLeft: 25,
  // },
  // name:{
  //   flex: 8,
  //   fontSize: "20",
  //   marginTop: 7,
  //   marginLeft: 10,
  // },
  dagasan:{
    flexDirection: "row",
    marginTop: 2,
    height: 40,
    // width: 400,
    alignItems: "center",
    // justifyContent: "center",
    borderWidth: 0,
    backgroundColor: "white",
  },
  field:{
      marginTop: 5,
      backgroundColor: "white",
      // justifyContent: "center",
      height: 245,
  },
  vm1_2: {
    flexDirection: "row",
    height: 180,
    // width: 400,
    // alignItems: "center",  
    // justifyContent: "center",
    borderWidth: 0,
    backgroundColor: "white",
  },
  pro1_2: {
    borderRadius: 400,
    
    height: 30,
    marginLeft: 20,
    marginTop:10,
    width:30,
  },
  name: {
    fontSize: "15",
    marginLeft: 10,
    fontWeight:'bold',
    marginTop: 8,

  },
  name2:{
    fontSize: "14",
    marginLeft: 10,
    
  },
  vm2_2:{    
    backgroundColor: "#EBECF0",
    borderRadius: 30,
    alignItems: "center",
    justifyContent:"center",
  // paddingHorizontal: -10,
    height: 25,
  //  marginHorizontal: 5,
  // paddingVertical: -5,
    width:100,
    marginTop:-120,
    marginLeft:20,
},
txt2_2:{
  marginHorizontal: 10,
    fontSize: 13,
    color: "#4f4f4f",
},
setgegdel:{
  marginLeft:20,
  marginRight:20,
  marginTop: 12,
},
setgegdel1:{
  textAlign: "right",
  marginRight: 13,
  color: '#grey',
  height: 25,
  marginTop: 7,
  color: '#6f6f6f',
},
Icon1:{
  fontSize: 20,
  marginLeft: 8,
  color: "#5f5f5f",

  justifyContent: "center"
},
Icon2:{
  fontSize: 20,
  marginLeft: 8,
  color: "#5f5f5f",
  flex:1,
},
Icon3:{
  fontSize: 20,
  marginLeft: 8,
  color: "#5f5f5f",
  flex:1,

},
icon:{
  flexDirection: "row",
  justifyContent: "space-around",
  justifyContent: "center",
  marginTop: 14,
  flex: 1,
  justifyContent: "space-around",


  
},
zuraas:{
  height:1,
  width: "90%",
  backgroundColor: "#EBECF0",
  justifyContent: "center",
  marginLeft: 15,

},
emoji:{
  color: "#2C7DA0",
  marginLeft: 10,
  fontSize: 15,
}
});
