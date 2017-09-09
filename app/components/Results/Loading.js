import React from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import style from "app/utils/style"

export default () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={style.colors.purple} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
})
