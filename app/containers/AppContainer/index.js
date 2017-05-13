import React from "react"
import { View, Text, StyleSheet } from "react-native"
import SearchContainer from "../SearchContainer"
import ResultsContainer from "../ResultsContainer"

class AppContainer extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.header}>
          <Text style={styles.headerText}>LSU Course Offerings</Text>
          <SearchContainer />
        </View>
        <ResultsContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#eee",
    flex: 1,
  },
  header: {
    backgroundColor: "rgb(249, 249, 249)",
    paddingTop: 30,
  },
  headerText: {
    fontSize: 22,
    textAlign: "center",
  }
})

export default AppContainer
