import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {s} from ".App.style";
import { Platform } from "react-native";

export default function Apps(){
    return(
        <SafeAreaProvider>
            <SafeAreaView style={s.container}>
                {Platform.OS==="android" && <Text>hi From Android</Text>}
                {Platform.OS==="ios" && <Text>hi From ios</Text>}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}