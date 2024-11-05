import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import Checkbox from "expo-checkbox";

const SafeAreaExample = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome Back</Text>
        <Text style={styles.textTitle}>Login to your account</Text>
        <View style={styles.containerIcon}>
          <FontAwesome
            name="user"
            size={20}
            color="#931f1f"
            style={styles.icon}
          />
          <TextInput
            placeholderTextColor={"#931f1f"}
            placeholder="Username"
            style={styles.input}
          />
        </View>
        <View style={styles.containerIcon}>
          <Entypo name="lock" size={20} color="#931f1f" style={styles.icon} />
          <TextInput
            placeholderTextColor={"#931f1f"}
            placeholder="Password"
            style={styles.input}
          />
        </View>
        <View style={styles.sectionHead}>
          <View style={styles.sectionLeft}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={"#fff"}
            />
            <Text style={styles.paragraph}>Remember me</Text>
          </View>
          <View style={styles.sectionRight}>
            <Text style={styles.textSectionRight}>Forgot Password?</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonHead}>
          <Text style={styles.logınText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.footerContent}>
          <Text style={styles.footerHead}>
            Dont have an account? <Text style={styles.footerSpan}>Sign up</Text>
          </Text>
        </View>

        <Image
          source={require("../../assets/images/blob-scatter-haikei.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e9dada",
    position: "relative",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  containerIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9dada",
    width: "90%",
    borderRadius: 8,
    padding: 10,
    top: 300,
    zIndex: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 4,
    marginTop: -360,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    marginTop: 20,
    fontSize: 50,
    color: "#fff",
    position: "relative",
    top: 200,
    fontWeight: "bold",
    zIndex: 20,
    flexDirection: "row",
  },
  textTitle: {
    fontSize: 24,
    color: "#fff",
    zIndex: 20,
    top: 210,
    fontWeight: "800",
  },
  textInputHead: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 40,
  },

  sectionHead: {
    flexDirection: "row",
    gap: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
    top: 300,
    paddingEnd: 2,
  },
  sectionRight: {
    zIndex: 20,
    top: 300,
  },
  paragraph: {
    fontSize: 15,
    color: "#fff",
    paddingEnd: 10,
  },
  checkbox: {
    margin: 8,
  },
  textSectionRight: {
    color: "#fff",
    fontWeight: "900",
  },
  buttonHead: {
    borderWidth: 1,
    borderColor: "#d47923",
    top: 340,
    zIndex: 20,
    backgroundColor: "#d47923",
    padding: 10,
    cursor: "pointer",
    width: "85%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  logınText: {
    color: "#931f1f",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  footerContent: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
    top: 350,
  },
  footerHead: {
    color: "#fff",
  },
  footerSpan: {
    fontWeight: "900",
    textDecorationLine: "underline",
    textDecorationColor: "#fff",
    textDecorationStyle: "solid",
    color: "#fff",
    fontSize: 18,
  },
});

export default SafeAreaExample;
