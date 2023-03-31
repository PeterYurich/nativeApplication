import React, { useState } from 'react'
import { View, Text, TextInput, 
  KeyboardAvoidingView, TouchableWithoutFeedback, 
  Keyboard, Platform, TouchableOpacity, Button } from 'react-native'
import { styles } from '@src/commonStyles';


export const RegistrationScreen = () => {
  const [login, setLogin] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const onRegister = () => {

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>Registration</Text>
          <TextInput style={styles.input}
            placeholder='Login'
            value={login}
            onChangeText={(text) => setLogin(text)}
          />
          <TextInput style={styles.input}
            placeholder='Email'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput style={styles.input}
            placeholder='Password'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title={"Register"}
            style={styles.mainButton}
            onPress={onRegister} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  )
}
