import Expo from "expo"
import React from "react"
import { Text, View } from "react-native"
import AppContainer from "./app/containers/AppContainer/"
import { Provider } from "react-redux"
import configureStore from "./app/redux/utils/store"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppContainer />
      </Provider>
    )
  }
}

Expo.registerRootComponent(App)
