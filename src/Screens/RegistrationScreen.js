import React, { useState } from 'react'
import {
  View, Text, TextInput,
  KeyboardAvoidingView, TouchableWithoutFeedback,
  Keyboard, Platform, TouchableHighlight, Button, ImageBackground, Dimensions
} from 'react-native'
import { css, palette } from '@src/commonStyles';
import Icon from "react-native-vector-icons/AntDesign"

export const RegistrationScreen = () => {
  const [login, setLogin] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const onRegister = () => {

  }

  return (
    <View style={css.container} >
      <ImageBackground source={require('@src/../assets/pics/registerBg.jpg')}
        resizeMode="cover"
        style={css.imageBackground}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: palette.paper,
            paddingTop: 92,

            position: 'relative'
          }}>
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 15,
                backgroundColor: palette.inputPaperBorder,

                position: 'absolute',
                top: -60,
                left: "50%",
                transform: [{ translateX: -60 }]
              }}>

                <Icon name="pluscircleo" color={palette.accent}
                size={25}
                style={{
                  position: 'absolute',
                  bottom: 20,
                  right: 0,
                  transform: [{ translateX: 12 }]
                }}
                 />
            </View>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} >
              <Text style={css.title} >Registration</Text>
              <TextInput style={css.input}
                placeholder='Login'
                value={login}
                onChangeText={(text) => setLogin(text)}
              />
              <TextInput style={css.input}
                placeholder='Email'
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput style={css.input}
                placeholder='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableHighlight
                style={css.mainButton}
                onPress={onRegister} >
                <Text style={{ textAlign: 'center' }}>Register</Text>
              </TouchableHighlight>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  )
}
