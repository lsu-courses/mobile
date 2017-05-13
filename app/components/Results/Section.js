import React from "react"
import { View, Text, StyleSheet } from "react-native"
import StudentCounter from "../../components/Results/StudentCounter"
import Interval from "../../components/Results/Interval";

const Section = ({
  number,
  title,
  enrollment_available,
  enrollment_current,
  enrollment_is_full,
  enrollment_total,
  timeIntervals,
  special,
  hasSameName,
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

    <View className="Section__content">
      <View className="Section__intervals">
        {timeIntervals.map((interval, i) => <Interval key={i} {...interval} />)}
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  view: {
    padding: 10,
    justifyContent: "space-between",
    paddingBottom: 20,
    marginTop: 10,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleHeader: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold",
  },
  titleSection: {
    fontSize: 32,
    fontWeight: "bold",
  },
})

export default Section
