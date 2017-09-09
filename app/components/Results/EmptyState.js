import React from "react"
import { View, Text } from "react-native"
import Instructions from "app/components/Instructions"

const EmptyState = ({ search }) => {
  return (
    <View>
      <View className="ResultsContainer__empty-state">
        <Text>Searching for "{search}" didn't return anything</Text>
      </View>
      <Instructions />
    </View>
  )
}

export default EmptyState
