import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { colors } from '../utils/color'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    const [email, setEmail] = useState('');
    const [Password, setpassword] = useState('');
    const [badEmail, setBadEmail] = useState('');
    const [badPassword, setBadPass] = useState('');
    const validate = () => {
        if(email=='rohit@gmail.com' && Password=='Rohit@23' ){
            navigation.navigate("DASHBOARD");
        }
        else(email=='' && Password=='');{
            

        }
    
        

    };

const handleGoBack = () => {
    navigation.goBack();

};
const success = () =>{
    navigation.navigate("SIGNUP");
}
return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
            <Ionicons name={"arrow-back-outline"} color={colors.primary} size={30} />

        </TouchableOpacity>
        <View style={styles.textContainer}>
            <Text style={styles.headingText}>Hey,</Text>
            <Text style={styles.headingText}>Welcome</Text>
            <Text style={styles.headingText}>Guys</Text>
        </View>
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Ionicons name={"mail-outline"} size={30} />
                <TextInput style={styles.textInputEmail}
                    value={email}
                    onChangeText={textInputEmail => {
                        setEmail(textInputEmail)
                    }}
                    placeholder="Enter Your Email"
                    keyboardType="email-address" />
                {badEmail === true && (
                    <Text style={{ marginTop: 10, alignSelf: 'center', color: 'red' }}>Please Enter Email Id</Text>)}
            </View>
            <View style={styles.inputContainer}>
                <SimpleLineIcons name={"lock"} size={30} />
                <TextInput style={styles.textInputPassword}
                    value={Password}
                    onChangeText={textInputPassword => {
                        setpassword(textInputPassword)
                    }}
                    placeholder="Enter Your Password"
                    secureTextEntry={secureEntery}

                />
                {badPassword === true && (
                    <Text style={{ marginTop: 10, alignSelf: 'center', color: 'red' }}>Please Enter Password</Text>)}
                <TouchableOpacity onPress={() => {
                    setSecureEntery((prev) => !prev);
                }}>
                    <SimpleLineIcons name={"eye"} size={20} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.forgetPasswordText}>Forget Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginButtonWrapper}>
                <Text style={styles.loginButtonText} onPress={validate}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.text1}>Or Continue with</Text>
            <TouchableOpacity style={[styles.loginButtonWrapper1]}>
                <Image source={require("../assets/google.png")} style={styles.google} />
                <Text

                    style={styles.signUpButtonText}>Google</Text>

            </TouchableOpacity>

        </View>
    </View>
)
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    google: {
        height: 15,
        width: 20,
        padding: 20,
        paddingRight: 20,
        marginVertical: 20,

    },
    backButtonWrapper: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray,
        borderRadius: 25,
    },
    textContainer: {
        marginVertical: 20,

    },
    headingText: {
        fontSize: 32,
        color: colors.primary,
        // textAlign:"center",
    },
    loginButtonWrapper: {
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 60,
        marginBottom: 20,
        borderRadius: 100,
    },
    loginButtonWrapper1: {
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 60,
        flexDirection: "row",
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 100,
    },

    loginButtonText: {

        color: colors.white,
        fontSize: 26,

    },
    formContainer: {
        marginTop: 20,

    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 100,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        marginVertical: 10,
    },
    textInputEmail: {
        flex: 1,
        paddingHorizontal: 20,

    },
    textInputPassword: {
        flex: 1,
        paddingHorizontal: 20,

    },
    forgetPasswordText: {
        textAlign: "right",
        color: colors.primary,
        marginVertical: 10,
    },
    signUpButtonText: {
        marginTop: 6,

        fontSize: 18,

    },
    text1: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,

    }
})