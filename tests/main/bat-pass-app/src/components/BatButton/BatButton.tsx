import React from 'react';
import { Button, View, Text } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View style={styles.container}>
        <Button
            onPress={() => console.log('olá')}
            title="Clique aqui"
            accessibilityLabel='clique em mim'
        />
        <Text>Test 😊</Text>
    </View>
  );
}