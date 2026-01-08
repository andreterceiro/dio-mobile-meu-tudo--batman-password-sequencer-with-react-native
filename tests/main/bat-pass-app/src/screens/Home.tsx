import React from "react";
import {View, Text} from "react-native";
import {BatLogo} from '../components/BatLogo/BatLogo'
import styles from "./Style"

export default function Home() {
    return (
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <BatLogo />
            </View>
          </View>
    );
}