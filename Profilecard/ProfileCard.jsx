import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { s } from "../Profilecard/Profilecard.style";

export function Profilecard({ firstName, lastName, age, isOpenToWork, onPressSocialMediaIcon }) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image style={s.avatar} source={require("../assets/ppng.jpg")} />
        <View style={s.texts}>
          <Text style={s.name}>{firstName} {lastName}</Text>
          <Text>hello i am Dinakar Dommata, I am {age} years old, from Hyderabad</Text>
          <Text style={{ backgroundColor: isOpenToWork === "true" ? "green" : "red", color: "white" }}>
            {isOpenToWork === "true" ? "I am open to work" : "Not looking"}
          </Text>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity onPress={()=>onPressSocialMediaIcon("twitter")} style={s.socialbtn}>
          <AntDesign name="twitter" size={24} color="skyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onPressSocialMediaIcon("linkedin")} style={s.socialbtn}>
          <AntDesign name="linkedin-square" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onPressSocialMediaIcon("instagram")} style={s.socialbtn}>
          <AntDesign name="instagram" size={24} color="#ff00ff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
