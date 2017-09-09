import React from "react"
import { View, Text, StyleSheet } from "react-native"
import CourseDescription from "app/components/Results/CourseDescription"
import Section from "app/components/Results/Section"

const haveSameName = sections => {
  const name = sections[0].title
  sections.forEach(sec => {
    if (sec.title !== name) return false
  })
  return true
}

const Course = ({
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
  <View style={styles.view}>
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
    </View>

    {description ? (
      <CourseDescription description={description} comments={comments} />
    ) : (
      undefined
    )}

    <Text style={[styles.padded, styles.sectionsHeader]}>Sections</Text>

    <View>
      {sections.map((sec, i) => (
        <Section key={i} haveSameName={haveSameName(sections)} {...sec} />
      ))}
    </View>
  </View>
)

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    marginTop: 30,
    paddingTop: 20,
    shadowRadius: 2,
    shadowOpacity: 0.15,
    shadowOffset: { height: 2, width: 2 },
    borderRadius: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  padded: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  headingName: {
    flexDirection: "row",
  },
  headingNameAbbreviation: {
    fontSize: 40,
    fontWeight: "900",
    paddingRight: 10,
  },
  headingNameNumber: {
    fontSize: 40,
    fontWeight: "400",
  },
  headingFullTitle: {
    fontSize: 20,
    fontWeight: "300",
    marginBottom: 20,
  },
  headingInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  headingInfoNumber: {
    backgroundColor: "black",
    borderRadius: 10,
    marginRight: 10,
    padding: 5,
  },
  headingInfoNumberText: {
    color: "white",
    fontSize: 20,
  },
  headingInfoText: {
    fontSize: 20,
  },
  sectionsHeader: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: "bold",
  },
})

export default Course
