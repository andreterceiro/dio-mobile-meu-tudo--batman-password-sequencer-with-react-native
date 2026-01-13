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
        <Pressable onPress={() => console.log("Generate")}>
          <Text style={styles.text}>Generate</Text>
        </Pressable>
        <Pressable onPress={() => console.log("Copy")}>
          <Text style={styles.text}>Copy</Text>
        </Pressable>  
    </View>
  );
}