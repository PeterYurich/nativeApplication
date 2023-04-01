import { StyleSheet } from 'react-native';

export const palette = {
  paper: '#fff',
  accent: '#FF6C00',
  inputPaper: '#F6F6F6',
  inputPaperBorder: '#E8E8E8',
  
}

export const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: palette.inputPaper,
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: palette.inputPaperBorder,
    marginBottom: 16,
  },
  title: {
    fontFamily: "Alkatra-Regular",
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 33,
  },
  mainButton: {
    width: '100%',
    backgroundColor: palette.accent,
    borderRadius: 100,
    textDecoration: 'capitalize',
    padding: 16,

  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },


});