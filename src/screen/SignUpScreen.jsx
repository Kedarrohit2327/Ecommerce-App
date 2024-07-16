import { StyleSheet, Text, TextInput,Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Feather from "react-native-vector-icons/Feather"
import { colors } from '../utils/color'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [secureEntery,setSecureEntery]=useState(true);
    const handleGoBack = () =>{
        navigation.goBack();

    };
  return (
    <View style={styles.container}>
    
        <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons name={"arrow-back-outline"} color={colors.primary} size={30}/>
        
      </TouchableOpacity> 
      <View style={styles.textContainer}>
            <Text style={styles.headingText}>Let's</Text>
            <Text style={styles.headingText}>Get</Text>
            <Text style={styles.headingText}>Started</Text>
      </View>
      <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
                <Ionicons name={"mail-outline"} size={30}/>
                <TextInput style={styles.textInput}
                placeholder="Enter Your Email"
                keyboardType="email-address"/>
            </View>
            <View style={styles.inputContainer}>
                <SimpleLineIcons name={"lock"} size={30}/>
                <TextInput style={styles.textInput}
                placeholder="Enter Your Password"
                secureTextEntry={secureEntery}
                />
                <TouchableOpacity onPress={() =>{
                    setSecureEntery((prev) => !prev);
                }}>
                <SimpleLineIcons name={"eye"} size={20}/>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <Feather name={"phone"} size={30}/>
                <TextInput style={styles.textInput}
                placeholder="Enter your Phone No"
                keyboardType="number-pad"/>

            </View>

      </View>
      
      <TouchableOpacity 
        style={styles.loginButtonWrapper}>
        <Text style={styles.loginButtonText}>Sign-Up</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>Or Continue with</Text>
        <TouchableOpacity style={[styles.loginButtonWrapper1]}>
        <Image source={require("../assets/google.png")}  style={styles.google}/>
            <Text 
            
            style={styles.signUpButtonText}>Google</Text>
            
        </TouchableOpacity>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
        padding: 15,
    },
    google:{
        height: 15,
        width: 20,
        padding: 20,
        paddingRight:20,
        marginVertical:15,

    },
    text1:{
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,

    },
     backButtonWrapper:{
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: colors.gray,
        borderRadius:25,
    },
    textContainer:{
        marginVertical: 15,

    },
    loginButtonWrapper:{
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 60,
        marginBottom:20,
        borderRadius: 100,
    },
    loginButtonWrapper1:{
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 60,
        flexDirection:"row",
        borderWidth:2,
        borderColor:colors.primary,
        borderRadius: 100,
    },

    loginButtonText:{
        
        color: colors.white,
        fontSize:26,

    },
    headingText:{
        fontSize: 26,
        color: colors.primary,
        // textAlign:"center",
    },
    inputContainer:{
        borderWidth:1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal:20,
        flexDirection: "row",
        alignItems:"center",
        padding: 5,
        marginVertical:10,
    },
    textInput:{
        flex:1,
        paddingHorizontal: 20,

    },
})