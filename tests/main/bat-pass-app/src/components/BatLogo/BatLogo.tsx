import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <View style={styles.container}>
      <Text>Bat pass generator</Text>
    </View>
  );
}