import React, {useState} from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import {BatTextInput} from '../BatTextInput/BatTextnput';

import { styles } from './BatButtonStyles';

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    setPass("olá");
  }

  return (
    <>
        <BatTextInput pass={pass} />
        <Pressable style={styles.button} onPress={handleGenerateButton}>
          <Text style={styles.text}>Generate</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => console.log("Copy")}>
          <Text style={styles.text}>Copy </Text>
        </Pressable>  
    </>
  );
}