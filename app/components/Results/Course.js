import React from "react"
import { View, Text, StyleSheet } from "react-native"
import CourseDescription from "app/components/Results/CourseDescription"
import Section from "app/components/Results/Section"
import style from "app/utils/style"

export default ({
  course: {
    abbreviation,
    number,
    hours,
    full_title,
    description,
    comments,
    sections,
  },
}) => (
  <View style={styles.container}>
    <View style={styles.padded}>
      <View>
        <View style={styles.headingName}>
          <Text style={styles.headingNameAbbreviation}>{abbreviation}</Text>
          <Text style={styles.headingNameNumber}>{number}</Text>
        </View>
        <Text style={styles.headingFullTitle}>{full_title}</Text>
      </View>

      <View style={styles.headingInfo}>
        <View style={styles.headingInfoNumber}>
          <Text style={styles.headingInfoNumberText}>{hours}</Text>
        </View>
        <Text style={styles.headingInfoText}>CREDIT HOURS</Text>
      </View>

      <CourseDescription description={description} comments={comments} />

      <Text style={styles.sectionsHeader}>Sections</Text>
    </View>

    <View>{sections.map((sec, i) => <Section key={i} {...sec} />)}</View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 2,
    marginBottom: 30,
    paddingTop: 20,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  padded: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  headingName: {
    flexDirection: "row",
  },
  headingNameAbbreviation: {
    color: style.colors.almostBlack,
    fontSize: 40,
    fontWeight: "900",
    paddingRight: 10,
  },
  headingNameNumber: {
    color: style.colors.almostBlack,
    fontSize: 40,
    fontWeight: "400",
  },
  headingFullTitle: {
    color: style.colors.almostBlack,
    fontSize: 20,
    fontWeight: "300",
    marginBottom: 20,
  },
  headingInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  headingInfoNumber: {
    backgroundColor: style.colors.almostBlack,
    borderRadius: 10,
    marginRight: 10,
    padding: 5,
  },
  headingInfoNumberText: {
    color: "white",
    fontSize: 20,
  },
  headingInfoText: {
    color: style.colors.almostBlack,
    fontSize: 20,
  },
  sectionsHeader: {
    color: style.colors.almostBlack,
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
  },
})
