import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View style={styles.container}>
        <Button
            onPress={() => console.log('olá')}
            title="Clique aqui"
            accessibilityLabel='clique em mim'
        />
        <Pressable onPress={() => console.log("Fui pressionado")}>
          <Text>Test 😊</Text>
        </Pressable>  
    </View>
  );
}