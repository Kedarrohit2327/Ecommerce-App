import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/color'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
   
    const handleLogin = () => {
        navigation.navigate("LOGIN");
    }
    const handleSignup = () =>{
        navigation.navigate("SIGNUP");
    }
  return (
    <View style={styles.container}>
        
      <Image source={require("../assets/logo.jpg")}  style={styles.logo}/>
      <Image source={require("../assets/home.jpg")} style= {styles.home}/>
      <Text style={styles.title}>Home Page</Text>
      <Text style={styles.subtitle}>
        This is the home Page for the Ecommerce App.
         First you have to login in. 
         If you are first time user then you have to sign up on it.
      
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        style={[styles.loginButtonWrapper,
            {backgroundColor: colors.primary},
        ]}
        onPress={handleLogin}
        >
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButtonWrapper]}
        onPress={handleSignup}
        >
            <Text style={styles.signUpButtonText}>Sign-Up</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.white,
        alignItems: "center",


    },
    logo:{
        height: 80,
        width: 150,
        marginVertical:20,

    },
    home:{
        marginVertical:20,
        height: 250,
        width: 231,

    },
    title:{
        fontSize: 40,
        // fontFamily: fonts.Regular,
        paddingHorizontal: 20,
        textAlign: "center",
        color: colors.primary,
        marginTop: 20,
    },
    subtitle:{
        fontSize: 20,
        textAlign: "center",
        paddingHorizontal: 160,
        color: colors.secondary,
        marginVertical: 10,

    },
    buttonContainer:{
        flexDirection: "row",
        marginTop: 10,
        borderWidth: 2,
        borderColor: colors.primary,
        width: "80%",
        height: 40,
        borderRadius: 100,
    },
    loginButtonWrapper:{
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        
        borderRadius: 98,
    },
    loginButtonText:{
        
        color: colors.white,
        fontSize:18,

    },
    signUpButtonText:{
        fontSize: 18,
        
    }
});