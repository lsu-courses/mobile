import React from "react"
import { View, Text, StyleSheet } from "react-native"
import StudentCounter from "app/components/Results/StudentCounter"
import Interval from "app/components/Results/Interval"
import style from "app/utils/style"

export default ({
  number,
  title,
  enrollment_available,
  enrollment_current,
  enrollment_is_full,
  enrollment_total,
  timeIntervals,
  special,
}) => (
  <View
    style={[
      styles.view,
      { backgroundColor: Number(number) % 2 == 0 ? "white" : "#f8f8f8" },
    ]}
  >
    <View style={styles.top}>
      <View style={styles.title}>
        <Text style={styles.titleHeader}>SECTION</Text>
        <Text style={styles.titleSection}>{number}</Text>
      </View>
      {
        <StudentCounter
          enrollment_available={enrollment_available}
          enrollment_current={enrollment_current}
          enrollment_is_full={enrollment_is_full}
          enrollment_total={enrollment_total}
        />
      }
    </View>

    <View>
      {timeIntervals.map((interval, i) => (
        <Interval key={number + title + i} {...interval} />
      ))}
    </View>
  </View>
)

const styles = StyleSheet.create({
  view: {
    justifyContent: "space-between",
    marginTop: 10,
    padding: 10,
    paddingBottom: 20,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleHeader: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
  },
  titleSection: {
    color: style.colors.almostBlack,
    fontSize: 32,
    fontWeight: "bold",
  },
})
