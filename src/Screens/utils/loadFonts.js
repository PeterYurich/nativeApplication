import * as Font from 'expo-font';

export async function loadFontsAsync() {
  await Font.loadAsync({
    'Alkatra-Regular': require('@src/../assets/fonts/alkatra/Alkatra-Regular.ttf'),
    'Alkatra-Bold': require('@src/../assets/fonts/alkatra/Alkatra-Bold.ttf'),
  });
}