import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '@src/commonStyles';
import { RegistrationScreen } from './src/Screens/RegistrationScreen';
import { loadFontsAsync } from './src/Screens/utils/loadFonts';

import { useEffect, useState } from 'react';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadApp() {
      await loadFontsAsync();
      setIsLoading(false);
    }
    loadApp();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = { fontFamily: 'Alkatra-Bold' };


  return (
    <View style={styles.container}>
      <Text >
          <RegistrationScreen />
          <StatusBar style="auto" />
      </Text>
    </View>
  );
}