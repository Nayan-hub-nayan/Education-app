
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
const logimg = require("./assets/image.png")


export default function Login() {
  return (
    <View >
       
       <Image source={logimg}/>

       <View style={styles.container}>

              <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
              <Text style={{textAlign:'center',marginTop:80,fontSize:18}}>Login/Signup</Text>
              <View style={styles.button}>
                 <AntDesign name="google" size={24} color='#fff' />
                  <Text style={{color:'#fff'}} > Sign In with Google</Text>
              </View>

       </View >

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    marginTop:-25,
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  welcomeText:{
     fontSize:22,
     textAlign:'center',
     fontWeight:'bold'
    },
  button: {
    backgroundColor:'#0C7DE4',
    padding:10,
    margin:30,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10

  }
});


