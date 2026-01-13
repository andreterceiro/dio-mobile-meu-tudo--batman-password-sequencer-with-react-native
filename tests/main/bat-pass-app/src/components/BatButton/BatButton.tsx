import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import {BatTextInput} from '../BatTextInput/BatTextnput';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <>
        <BatTextInput />
        <Pressable style={styles.button} onPress={() => console.log("Generate")}>
          <Text style={styles.text}>Generate</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => console.log("Copy")}>
          <Text style={styles.text}>Copy </Text>
        </Pressable>  
    </>
  );
}