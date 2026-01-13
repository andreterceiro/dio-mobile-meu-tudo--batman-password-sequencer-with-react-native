import React from "react";
import {View, Text} from "react-native";
import {BatLogo} from '../components/BatLogo/BatLogo';
import styles from "./Style";
import { StatusBar } from 'expo-status-bar';
import { BatButton } from "../components/BatButton/BatButton";

export default function Home() {
    return (
          <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
              <BatLogo />
            </View>
            <View style={styles.inputContainer}>
              <BatButton />
            </View>
            <StatusBar style="light" />
          </View>
    );
}