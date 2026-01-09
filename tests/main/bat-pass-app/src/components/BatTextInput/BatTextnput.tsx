import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './BatTextInputStyles';

export function BatTextInput() {
  return (
      <TextInput placeholder="pass" style={styles.inputer}>
      </TextInput>
  );
}