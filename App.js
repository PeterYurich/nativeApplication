import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from '@src/commonStyles';
import { RegistrationScreen } from './src/Screens/RegistrationScreen';
// import * as Asdf from 'react-native-google-fonts';

// async function loadFontsAsync() {
//   await loadFonts({
//     'Roboto-Regular': {
//       weights: [400],
//     },
//     Montserrat: {
//       weights: [400, 500, 700],
//     },
//   });
// }

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      <StatusBar style="auto" />
    </View>
  );
}