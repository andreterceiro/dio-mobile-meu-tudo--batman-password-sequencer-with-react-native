import React from 'react';
import { View, Text, Image } from 'react-native';
import batLogo from "../../../assets/bat-logo.png"
import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <View style={styles.container}>
      <Text>Bat pass generator</Text>
      <Image
        source={batLogo}
      />
    </View>
  );
}