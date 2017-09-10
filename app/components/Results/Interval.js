import React from "react"
import Case from "case"
import { View, Text, StyleSheet } from "react-native"
import style from "app/utils/style"

export default class Interval extends React.Component {
  generateInfoOverlay(is_lab, has_time, type) {
    if (is_lab && !has_time) {
      return (
        <Text style={{ textAlign: "center" }}>
          {type === "lab" ? "Lab Time TBA" : "Section Online"}
        </Text>
      )
    }
  }

  generateClass(day, days) {
    if (days.includes(day)) return styles.dateSelected
    else return styles.date
  }

  formatInstructor(inst) {
    return inst.name
      ? Case.capital(inst.name)
          .split(" ")
          .join(", ") + "."
      : ""
  }

  formatTime(time) {
    if (time.toLowerCase().includes("n")) {
      time = time.slice(0, 2) + ":" + time.slice(2, -1) + " PM"
      if (time.substr(0, 1) === "0") {
        return time.slice(1)
      } else {
        return time
      }
    } else {
      return (
        (time.slice(0, -2)[0] === "0" ? time.slice(1, -2) : time.slice(0, -2)) +
        ":" +
        time.slice(-2)
      )
    }
  }

  render() {
    const {
      instructor,
      days,
      has_time,
      start,
      end,
      location_building,
      location_room,
      is_lab,
      s_night,
      s_all_web,
      s_most_web,
      s_half_web,
      s_some_web,
      s_req_dept_perm,
      s_req_inst_perm,
      s_majors_only,
      s_cmi,
      s_cmi_written,
      s_cmi_spoken,
      s_cmi_tech,
      s_cmi_visual,
      s_svc,
      comments,
    } = this.props

    return (
      <View style={styles.view}>
        <View>
          {this.generateInfoOverlay(is_lab, has_time, "lab")}
          {this.generateInfoOverlay(s_all_web, has_time, "web")}
          <View style={styles.dates}>
            <Text style={this.generateClass("MONDAY", days)}>M</Text>
            <Text style={this.generateClass("TUESDAY", days)}>T</Text>
            <Text style={this.generateClass("WEDNESDAY", days)}>W</Text>
            <Text style={this.generateClass("THURSDAY", days)}>T</Text>
            <Text style={this.generateClass("FRIDAY", days)}>F</Text>
          </View>
        </View>

        {has_time ? (
          <View style={styles.time}>
            <Text style={styles.timeBold}>{this.formatTime(start)}</Text>
            <Text style={styles.timeLight}> → </Text>
            <Text style={styles.timeBold}>{this.formatTime(end)}</Text>
          </View>
        ) : (
          <Text style={styles.timeLight}>Time TBA</Text>
        )}

        <View>
          <Text style={styles.location}>
            {location_building || location_room ? (
              location_room + " " + Case.capital(location_building)
            ) : (
              "Location TBA"
            )}
          </Text>
        </View>

        <View>
          {instructor[0].name !== "" ? (
            instructor.map((inst, i) => (
              <Text key={inst.name + i} style={styles.instructor}>
                {this.formatInstructor(inst)}
              </Text>
            ))
          ) : (
            <Text style={styles.instructor}>No Instructor Listed</Text>
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  dates: {
    flexDirection: "row",
  },
  date: {
    backgroundColor: "lightgray",
    borderRadius: 5,
    fontSize: 25,
    padding: 10,
  },
  dateSelected: {
    backgroundColor: style.colors.almostBlack,
    borderRadius: 20,
    color: "white",
    fontSize: 30,
    padding: 10,
  },
  time: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  timeBold: {
    color: style.colors.almostBlack,
    fontSize: 20,
    fontWeight: "bold",
  },
  timeLight: {
    color: "lightgray",
    fontSize: 20,
  },
  location: {
    color: style.colors.almostBlack,
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  },
  instructor: {
    color: style.colors.almostBlack,
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
})
