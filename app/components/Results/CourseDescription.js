import React from "react"
import Case from "case"
import { View, Text, StyleSheet } from "react-native"

const replaceAll = (target, search, replacement) => {
  return target.replace(new RegExp(search, "g"), replacement)
}

const processComments = comments => {
  if (comments[0] === "") return "Comment was found to be blank."
  let newComment = Case.sentence(comments.join(" ").toLowerCase())
  let replacements = [
    ["tba", "TBA"],
    ["Lec", "Lecture"],
    ["prereq", "pre-requisite"],
    ["aleks", "ALEKS"],
    ["lsu", "LSU"],
    ["nov", "Nov"],
  ]
  replacements.forEach(
    rep => (newComment = replaceAll(newComment, rep[0], rep[1]))
  )
  return newComment
}

const CourseDescription = ({ description, comments }) => (
  <View style={{paddingLeft: 20, paddingRight: 20}}>
    <View>
      <Text style={styles.title}>DETAILS</Text>
      <Text style={styles.content}>{description}</Text>
    </View>

    {comments.length > 0
      ? <View>
          <Text style={styles.title}>COMMENTS</Text>
          <Text style={styles.content}>
            {processComments(comments) || "No Comments"}
          </Text>
        </View>
      : undefined}

  </View>
)

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    marginTop: 10,
  }
})

export default CourseDescription
