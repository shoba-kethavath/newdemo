import { StyleSheet } from "react-native";

 export const s=StyleSheet.create({
    container:{
        borderRadius:10,
       marginLeft:"30%",
        marginRight:"30%",
        padding:10,
        backgroundColor:"white",
        elevation:8,
        shadowColor:"black",
        shadowOffset:{
            
            width:0,
            height:5,

        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
    },
    name:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:5,

    },
    header:{
        flexDirection:"row",

    },
    social:{
        padding:10,
        flexDirection:"row",
        justifyContent:"space-evenly",

    },
    avatar:{
        width:70,
        height:70,
        borderRadius:"50%",
        
    },
    texts:{
        flex:1,
        paddingLeft:15,
    },
    socialbtn:{
        borderRadius:"50%",
        padding:10,
        backgroundColor:"#dcdcdc",
    },
 });