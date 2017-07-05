import React from "react"
import { connect } from "react-redux"
import { Platform, View, TextInput, StyleSheet } from "react-native"
import {
  performSearch,
  requestDepartment,
  filterDepartment,
  clearDepartment,
  setGlobalSearch,
} from "../../redux/ducks/search"

class SearchContainer extends React.Component {
  processInput(input) {
    const lower = input.toLowerCase()
    const searchInputArray = lower.split(" ")

    return {
      text: lower,
      searchInputArray,
      rest:
        searchInputArray.length > 1
          ? lower.slice(lower.indexOf(" ")).trim()
          : "",
    }
  }

  performSearch(input) {
    this.props.setGlobalSearch(input)

    const { text, searchInputArray, rest } = this.processInput(input)

    if (input.length < 2) {
      return this.props.clearDepartment()
    }

    const firstWord = searchInputArray[0]

    if (isNaN(firstWord)) {
      if (this.props.current_department === firstWord) {
        this.props.filterDepartment(rest)
      } else {
        if (this.props.department_cache[firstWord]) {
          this.props.filterDepartment(rest, firstWord)
        } else {
          this.props
            .requestDepartment(firstWord)
            .then(() => {
              this.props.filterDepartment(rest)
            })
            .catch(err => console.log(err))
        }
      }
    }
  }

  render() {
    return (
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          autoCapitalize={"none"}
          autoCorrect={false}
          placeholder={"Search"}
          onChangeText={value => this.performSearch(value)}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    results: state.search.results || [],
    current_set: state.search.current_set,
    current_loading: state.search.current_loading,
    current_department: state.search.current_department,
    department_cache: state.search.department_cache,
    has_search: state.search.has_search,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    performSearch: input => dispatch(performSearch(input)),
    clearDepartment: () => dispatch(clearDepartment()),
    requestDepartment: dept => dispatch(requestDepartment(dept)),
    filterDepartment: (filter, change) =>
      dispatch(filterDepartment(filter, change)),
    setGlobalSearch: input => dispatch(setGlobalSearch(input)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)

const styles = StyleSheet.create({
  view: {
    backgroundColor: "transparent",
    marginTop: 10,
  },
  input: {
    backgroundColor: "rgb(228, 229, 231)",
    fontWeight: "400",
    fontFamily: Platform.OS == "ios" ? "Helvetica Neue" : "normal",
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 6,
    color: "rgb(139, 139, 144)",
    height: 30,
    paddingLeft: 14,
  },
})
