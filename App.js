import Expo from "expo"
import React from "react"
import { Text, StyleSheet, View } from "react-native"
import SearchContainer from "app/containers/SearchContainer"
import ResultsContainer from "app/containers/ResultsContainer"
import style from "app/utils/style"

export default class App extends React.Component {
  performSearch(input) {
    console.log(input)
  }

  render() {
    return (
      <View style={styles.view}>
        <SearchContainer performSearch={this.performSearch.bind(this)} />
        <ResultsContainer />
      </View>
    )
  }
}

Expo.registerRootComponent(App)

const styles = StyleSheet.create({
  view: {
    backgroundColor: style.colors.defaultGray,
    flex: 1,
  },
})
