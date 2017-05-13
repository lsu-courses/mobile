import Expo from "expo"
import React from "react"
import { Text, View } from "react-native"
import AppContainer from "./app/containers/AppContainer/"

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

Expo.registerRootComponent(App)
