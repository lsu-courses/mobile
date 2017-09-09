import React from "react"
import { connect } from "react-redux"
import { Platform, Text, TextInput, StyleSheet, View } from "react-native"
import style from "app/utils/style"

export default ({ currentSearch, performSearch }) => (
  <View style={styles.container}>
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>LSU Course Offerings</Text>
    </View>

    <TextInput
      style={styles.input}
      autoCapitalize={"none"}
      autoCorrect={false}
      placeholder={"Search"}
      value={currentSearch}
      onChangeText={search => performSearch(search)}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.colors.almostWhite,
    paddingBottom: 5,
    paddingTop: 30,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
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
