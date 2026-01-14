import React, {useState} from 'react';
import { Text, Pressable } from 'react-native';
import {BatTextInput} from '../BatTextInput/BatTextInput';

import { styles } from './BatButtonStyles';
import generatePass from '../../services/passwordService';

export function BatButton() {
  const [pass, setPass] = useState("");

  let generateToken = generatePass();

  function handleGenerateButton() {
    setPass(generateToken);
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