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
          placeholder={"Search"}
          ref="SearchInput"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "transparent",
    marginTop: 10,
  },
  input: {
    backgroundColor: "rgb(228, 229, 231)",
    fontWeight: "400",
    fontFamily: Platform.OS == "ios" ? "Helvetica Neue" : "normal",
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 6,
    color: "rgb(139, 139, 144)",
    height: 30,
    paddingLeft: 14,
  },
})

export default SearchContainer
