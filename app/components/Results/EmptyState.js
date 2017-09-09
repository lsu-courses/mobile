import React from "react"
import { View, Text, StyleSheet } from "react-native"
import style from "app/utils/style"

const EmptyState = ({ search }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Searching for "{search}" didn't return anything.
    </Text>
  </View>
)

export default EmptyState

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: style.colors.almostBlack,
  },
})
