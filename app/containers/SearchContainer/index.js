import React from "react"
import { connect } from "react-redux"
import { Platform, Text, TextInput, StyleSheet, View } from "react-native"
import style from "app/utils/style"

class SearchContainer extends React.Component {
  performSearch(input) {
    console.log(input)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>LSU Course Offerings</Text>
        </View>
        <TextInput
          style={styles.input}
          autoCapitalize={"none"}
          autoCorrect={false}
          placeholder={"Search"}
          onChangeText={value => this.performSearch(value)}
        />
      </View>
    )
  }
}

export default SearchContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.colors.almostWhite,
    paddingBottom: 5,
    paddingTop: 30,
  },
  headingContainer: {
    paddingBottom: 15,
  },
  heading: {
    color: style.colors.almostBlack,
    fontSize: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: style.colors.defaultGray,
    borderRadius: 6,
    color: style.colors.almostBlack,
    fontFamily: Platform.OS == "ios" ? "Helvetica Neue" : "normal",
    fontSize: 20,
    fontWeight: "400",
    height: 40,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 14,
    textAlign: "center",
  },
})
