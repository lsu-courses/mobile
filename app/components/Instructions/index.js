import React from "react"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import style from "app/utils/style"

export default class Instructions extends React.Component {
  exampleSearch(text) {
    const { performSearch } = this.props

    return (
      <TouchableHighlight
        onPress={() => performSearch(text)}
        underlayColor={"transparent"}
      >
        <View style={styles.example}>
          <Text style={styles.exampleText}>{text}</Text>
          <FontAwesome name="search" style={styles.searchIcon} />
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.intro}>Search by...</Text>
        <View>
          <Text style={styles.exampleDescription}>department name</Text>
          <View style={styles.exampleContainer}>
            {this.exampleSearch("BIOL")}
            {this.exampleSearch("MATH")}
          </View>
        </View>

        <View>
          <Text style={styles.exampleDescription}>
            department name + course number
          </Text>
          <View style={styles.exampleContainer}>
            {this.exampleSearch("HNRS 2030")}
            {this.exampleSearch("BIOL 1002")}
          </View>
        </View>

        <View>
          <Text style={styles.exampleDescription}>
            department name + course name
          </Text>
          <View style={styles.exampleContainer}>
            {this.exampleSearch("MATH algebra")}
            {this.exampleSearch("BIOL micro")}
          </View>
        </View>

        <Text style={styles.credits}>
          App made by Cody Wall and Connor Elsea
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 10,
    paddingBottom: 20,
    paddingTop: 20,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  intro: {
    color: style.colors.almostBlack,
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  exampleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  exampleDescription: {
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
  example: {
    borderRadius: 5,
    flexDirection: "row",
    marginRight: 10,
    padding: 10,
    backgroundColor: style.colors.lightPurple,
  },
  exampleText: {
    color: style.colors.defaultGray,
    fontSize: 16,
    fontWeight: "500",
    marginRight: 10,
  },
  searchIcon: {
    color: style.colors.defaultGray,
    fontSize: 16,
    fontWeight: "100",
  },
  credits: {
    textAlign: "center",
    marginTop: 40,
  },
})
