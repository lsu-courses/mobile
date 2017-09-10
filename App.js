import Expo from "expo"
import React from "react"
import { Text, StyleSheet, View } from "react-native"
import SearchContainer from "app/containers/SearchContainer"
import ResultsContainer from "app/containers/ResultsContainer"
import style from "app/utils/style"

export default class App extends React.Component {
  state = {
    loading: false,
    currentSearch: "",
    currentResults: [],
    currentDepartment: "",
    departmentCache: [],
  }

  performSearch(input) {
    this.setState({ currentSearch: input, loading: true })

    if (input.length < 2) {
      this.setState({ currentResults: [], loading: false })
      return
    }

    const lower = input.toLowerCase()
    const inputArray = lower.split(" ")
    const firstWord = inputArray[0]
    const excess = inputArray.splice(1).join("")

    if (this.state.currentDepartment === firstWord) {
      this.filterCurrentDepartment(excess)
    } else {
      const { departmentCache } = this.state

      if (departmentCache[firstWord]) {
        this.setState({
          currentResults: departmentCache[firstWord],
          currentDepartment: firstWord,
          loading: false,
        })
      } else {
        this.requestDepartment(firstWord)
      }
    }
  }

  async requestDepartment(department) {
    try {
      let response = await fetch(
        "https://lsu-api.herokuapp.com/department?dept=" + department
      )
      let responseJSON = await response.json()

      if (responseJSON.length === 0) {
        this.setState({ loading: false, currentResults: [] })
      } else {
        const departmentName = responseJSON[0].abbreviation.toLowerCase()

        this.setState({
          departmentCache: {
            ...this.state.departmentCache,
            [departmentName]: responseJSON,
          },
          currentResults: responseJSON,
          currentDepartment: departmentName,
          loading: false,
        })
      }
    } catch (error) {
      console.error(error)

      this.setState({
        currentResults: [],
        currentDepartment: "",
        loading: false,
      })
    }
  }

  filterCurrentDepartment(filter) {
    const cachedDepartment = this.state.departmentCache[
      this.state.currentDepartment
    ]

    let courses = cachedDepartment

    if (filter.length > 0) {
      if (isNaN(filter)) {
        // return all courses whose title include filter

        let filteredCourses = []

        courses.forEach(course => {
          const sections = course.sections
          let newSections = []

          sections.forEach(section => {
            const title = section.title ? section.title.toLowerCase() : ""
            const fullTitle = section.fullTitle
              ? section.fullTitle.toLowerCase()
              : ""

            if (title.includes(filter) || fullTitle.includes(filter)) {
              newSections.push(section)
            }
          })

          if (newSections.length > 0) {
            filteredCourses.push({ ...course, sections: newSections })
          }
        })

        courses = filteredCourses
      } else {
        // return all courses whose number include filter

        let filteredCourses = []

        courses.forEach(course => {
          if (course.number == filter || course.number.includes(filter)) {
            filteredCourses.push(course)
          }
        })

        courses = filteredCourses
      }
    }

    this.setState({
      currentResults: courses,
      loading: false,
    })
  }

  render() {
    const { loading, currentSearch, currentResults } = this.state

    return (
      <View style={styles.view}>
        <SearchContainer
          currentSearch={currentSearch}
          performSearch={this.performSearch.bind(this)}
        />
        <ResultsContainer
          loading={loading}
          currentSearch={currentSearch}
          currentResults={currentResults}
          performSearch={this.performSearch.bind(this)}
        />
      </View>
    )
  }
}

Expo.registerRootComponent(App)

const styles = StyleSheet.create({
  view: {
    backgroundColor: style.colors.defaultGray,
    flex: 1,
  },
})
