import Expo from "expo"
import React from "react"
import { Text, StyleSheet, View } from "react-native"
import SearchContainer from "app/containers/SearchContainer"
import ResultsContainer from "app/containers/ResultsContainer"
import style from "app/utils/style"

const App = () => (
  <View style={styles.view}>
    <SearchContainer />
    <ResultsContainer />
  </View>
)

export default App
Expo.registerRootComponent(App)

const styles = StyleSheet.create({
  view: {
    backgroundColor: style.colors.defaultGray,
    flex: 1,
  },
})
