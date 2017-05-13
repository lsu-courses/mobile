import React from "react"
import { Platform, View, TextInput, StyleSheet } from "react-native"

class SearchContainer extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          autoCapitalize={"none"}
          autoCorrect={false}
          placeholder={"Search..."}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "transparent",
    paddingBottom: 10,
  },
  input: {
    padding: 15,
    height: 80,
    backgroundColor: "white",
    fontSize: 40,
    fontWeight: "200",
    fontFamily: Platform.OS == "ios" ? "Helvetica Neue" : "normal",
    shadowRadius: 10,
    shadowOpacity: 0.15,
    marginTop: 10,
  },
})

export default SearchContainer
