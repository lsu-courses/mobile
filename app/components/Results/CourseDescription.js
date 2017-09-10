import React from "react"
import Case from "case"
import { View, Text, StyleSheet } from "react-native"
import style from "app/utils/style"

export default class CourseDescription extends React.Component {
  replaceAll(target, search, replacement) {
    return target.replace(new RegExp(search, "g"), replacement)
  }

  processComments(comments) {
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
      rep => (newComment = this.replaceAll(newComment, rep[0], rep[1]))
    )
    return newComment
  }

  render() {
    const { description, comments } = this.props

    return (
      <View>
        {description &&
        description.length > 0 && (
          <View>
            <Text style={styles.title}>DETAILS</Text>
            <Text style={styles.content}>{description}</Text>
          </View>
        )}

        {comments &&
        comments.length > 0 && (
          <View>
            <Text style={styles.title}>COMMENTS</Text>
            <Text style={styles.content}>
              {this.processComments(comments) || "No Comments"}
            </Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: style.colors.almostBlack,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  content: {
    color: style.colors.almostBlack,
    marginTop: 10,
  },
})
