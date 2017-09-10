import React from "react"
import { View, Text, StyleSheet } from "react-native"
import style from "app/utils/style"

const StudentCounter = ({
  enrollment_available,
  enrollment_current,
  enrollment_is_full,
  enrollment_total,
}) => {
  let percent = Math.trunc(
    Number(enrollment_current) / Number(enrollment_total) * 100
  )

  return (
    <View style={styles.view}>
      <Text style={styles.percent}>{percent}% Full</Text>

      <Text style={styles.amount}>
        {enrollment_available}/{enrollment_total} Spots Left
      </Text>

      <View style={styles.bar}>
        <View
          style={[
            styles.fill,
            {
              width: `${percent}%`,
              borderTopRightRadius: percent > 93 ? 10 : 0,
              borderBottomRightRadius: percent > 93 ? 10 : 0,
            },
          ]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
  },
  percent: {
    color: style.colors.almostBlack,
    fontSize: 14,
    fontWeight: "500",
  },
  amount: {
    color: "gray",
  },
  bar: {
    marginTop: 10,
    borderRadius: 10,
    height: 30,
    width: "100%",
    backgroundColor: "lightgray",
  },
  fill: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "green",
    height: "100%",
  },
})

export default StudentCounter
