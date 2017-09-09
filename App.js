import Expo from "expo"
import React from "react"
import { Text, StyleSheet, View } from "react-native"
import SearchContainer from "app/containers/SearchContainer"
import ResultsContainer from "app/containers/ResultsContainer"

const App = () => (
  <View style={styles.view}>
    <View style={styles.header}>
      <SearchContainer />
    </View>
    <ResultsContainer />
  </View>
)

export default App
Expo.registerRootComponent(App)

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#eee",
    flex: 1,
  },
  header: {
    backgroundColor: "rgb(249, 249, 249)",
    paddingTop: 20,
  },
})
