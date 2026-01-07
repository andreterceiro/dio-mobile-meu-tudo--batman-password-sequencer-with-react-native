import React from "react";
import {View, Text} from "react-native";
import {BatLogo} from '../components/BatLogo/BatLogo'

export default function Home() {
    return (
          <View>
            <View>
              <BatLogo />
            </View>
            <Text>Home works!!</Text>
          </View>
    );
}