import React from "react"
import { connect } from "react-redux"
import { View, ScrollView, StyleSheet } from "react-native"
import Loading from "app/components/Results/Loading"
import Course from "app/components/Results/Course"
import EmptyState from "app/components/Results/EmptyState"
import Instructions from "app/components/Instructions"

export default class ResultsContainer extends React.Component {
  renderResults() {
    //h
  }

  render() {
    const { loading, currentSearch, currentResults } = this.props

    return (
      <ScrollView style={styles.container}>
        {loading && <Loading />}
        {this.renderResults()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
  },
})

// renderResults() {
//   // if (this.props.current_set && this.props.current_set.length > 0) {
//   //   return this.props.current_set.map((course, i) => (
//   //     <Course course={course} key={i} />
//   //   ))
//   // } else if (this.props.has_search) {
//   //   return <EmptyState search={this.props.search_input} />
//   // } else {
//   //   return <Instructions />
//   // }
// }
