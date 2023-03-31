import * as Font from 'expo-font';

export async function loadFontsAsync() {
  await Font.loadAsync({
    'Roboto-Regular': {
      uri: 'https://fonts.google.com/download?family=Roboto',
    },
    'Alkatra-Regular': require('@src/assets/fonts/alkatra/Alkatra-Regular.ttf'),
    'Alkatra-Bold': require('@src/assets/fonts/alkatra/Alkatra-Bold.ttf'),
  });
}