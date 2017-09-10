import React from "react"
import { ActivityIndicator, Text, View } from "react-native"
import style from "app/utils/style"

export default () => (
  <ActivityIndicator
    size="large"
    color={style.colors.purple}
    style={{ marginBottom: 15 }}
  />
)
