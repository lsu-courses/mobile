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
        </View>
        <SearchContainer />
        <ResultsContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#eee",
    flex: 1
  },
  header: {
    marginTop: 20,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
  }
})

export default AppContainer
