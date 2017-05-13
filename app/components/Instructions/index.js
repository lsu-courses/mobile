import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

const Instructions = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Instructions</Text>

      <View>
        <Text style={styles.exampleDescription}>Department Name</Text>
        <View style={styles.exampleContainer}>
          <View style={styles.example}>
            <Text style={styles.exampleText}>BIOL</Text>
            <FontAwesome name="search" style={styles.searchIcon} />
          </View>
          <View style={styles.example}>
            <Text style={styles.exampleText}>MATH</Text>
            <FontAwesome name="search" style={styles.searchIcon} />
          </View>
        </View>

      </View>

      <View>
        <Text style={styles.exampleDescription}>
          Department name & course number
        </Text>
        <View style={styles.exampleContainer}>
          <View style={styles.example}>
            <Text style={styles.exampleText}>HNRS 2030</Text>
            <FontAwesome name="search" style={styles.searchIcon} />
          </View>
          <View style={styles.example}>
            <Text style={styles.exampleText}>BIOL 1002</Text>
            <FontAwesome name="search" style={styles.searchIcon} />
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.exampleDescription}>
          Department name & course name
        </Text>
        <View style={styles.exampleContainer}>
          <View style={styles.example}>
            <Text style={styles.exampleText}>MATH algebra</Text>
            <FontAwesome name="search" style={styles.searchIcon} />
          </View>
          <View style={styles.example}>
            <Text style={styles.exampleText}>BIOL micro</Text>
            <FontAwesome name="search" style={styles.searchIcon} />
          </View>
        </View>
      </View>

      <Text style={styles.credits}>
        App made by Cody Wall and Connor Elsea
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    shadowRadius: 2,
    shadowOpacity: 0.15,
    shadowOffset: { height: 2, width: 2 },
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  exampleContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  exampleDescription: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "300",
  },
  example: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "lightgray",
    padding: 10,
    flexDirection: "row",
    marginRight: 10,
  },
  exampleText: {
    marginRight: 10,
    fontSize: 22,
  },
  searchIcon: {
    fontSize: 22,
    fontWeight: "100",
    color: "lightgray",
  },
  credits: {
    textAlign: "center",
    marginTop: 40,
  },
})

export default Instructions
