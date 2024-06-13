import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Profilecard } from './Profilecard/ProfileCard';
import { s } from "./AppStyles";
import { Alert, Linking, Text,Platform } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import{s}from "./App.style";
{/*export default function App() {
  function goToSocialMedia(socialMedia) {
    let url;
    switch (socialMedia) {
      case "twitter":
        url = "http://twitter.com";
        break;
      case "instagram":
        url = "http://instagram.com";
        break;
      case "linkedin":
        url = "http://linkedin.com";
        break;
      default:
        url = ""; // Handle default case if needed
    }
    Linking.openURL(url);
  }
 
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        {Platform.OS === "android" && <Text>hi From Android</Text>}
        {Platform.OS === "ios" && <Text>hi From iOS</Text>}
        <Profilecard 
          onPressSocialMediaIcon={goToSocialMedia} 
          firstName="Dinakar"
          lastName="Dommata"
          age={23}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
  
 }*/}
export default function App(){
  return<SafeAreaProvider>
    <SafeAreaView style={s.root}>
      <Text>HEllo</Text>
    </SafeAreaView>
  </SafeAreaProvider>
}