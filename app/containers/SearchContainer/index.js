import React from "react"
import { Platform, View, TextInput, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

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
        <FontAwesome
          name="search"
          style={styles.searchIcon}
          onPress={event => {
            this.refs.SearchInput.focus()
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "transparent",
    paddingBottom: 10,
    flexDirection: "row",
    marginTop: 10,
  },
  input: {
    padding: 10,
    paddingLeft: 20,
    height: 60,
    backgroundColor: "white",
    fontSize: 34,
    fontWeight: "200",
    fontFamily: Platform.OS == "ios" ? "Helvetica Neue" : "normal",
    shadowRadius: 10,
    shadowOpacity: 0.15,
    width: "85%",
  },
  searchIcon: {
    backgroundColor: "white",
    height: 60,
    width: "15%",
    fontSize: 34,
    textAlign: "center",
    paddingTop: 10,
    color: "lightgray",
  },
})

export default SearchContainer
