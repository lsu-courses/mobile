import React from "react"
import { connect } from "react-redux"
import { View, ScrollView, StyleSheet } from "react-native"
import Loading from "app/components/Results/Loading"
import Course from "app/components/Results/Course"
import EmptyState from "app/components/Results/EmptyState"
import Instructions from "app/components/Instructions"

export default class ResultsContainer extends React.Component {
  renderResults() {
    const { currentSearch, currentResults, setSearch } = this.props

    if (currentResults && currentResults.length > 0) {
      return currentResults.map((course, i) => (
        <Course course={course} key={i + course.abbreviation + course.number} />
      ))
    } else if (currentSearch && currentSearch.length > 0) {
      return <EmptyState search={currentSearch} />
    } else {
      return <Instructions setSearch={setSearch} />
    }
  }

  render() {
    const { loading, setSearch } = this.props

    return (
      <ScrollView>
        <View style={styles.container}>
          {loading && <Loading setSearch={setSearch} />}
          {this.renderResults()}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 30,
  },
})
