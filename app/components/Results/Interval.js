import React from "react"
import Case from "case"
import { View, Text, StyleSheet } from "react-native"

const generateClass = (day, days) => {
  if (days.includes(day)) return styles.dateSelected
  else return styles.date
}

const Interval = ({
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
}) => {
  return (
    <View style={styles.view}>

      <View className="Interval__top Interval__portion">
        <View className="Interval__dates">
          <View style={styles.dates}>
            {generateInfoOverlay(is_lab, has_time, "lab")}
            {generateInfoOverlay(s_all_web, has_time, "web")}
            <Text style={generateClass("MONDAY", days)}>M</Text>
            <Text style={generateClass("TUESDAY", days)}>T</Text>
            <Text style={generateClass("WEDNESDAY", days)}>W</Text>
            <Text style={generateClass("THURSDAY", days)}>T</Text>
            <Text style={generateClass("FRIDAY", days)}>F</Text>
          </View>
        </View>

        {has_time
          ? <View style={styles.time}>
              <Text style={styles.timeBold}>{formatTime(start)}</Text>
              <Text style={styles.timeLight}> → </Text>
              <Text style={styles.timeBold}>{formatTime(end)}</Text>
            </View>
          : <Text style={styles.timeLight}>Time TBA</Text>}

        {location_building || location_room
          ? <View>
              <Text style={styles.location}>
                {location_room} {Case.capital(location_building)}
              </Text>
            </View>
          : <Text style={styles.location}>Location TBA</Text>}

        <View>
          {instructor[0].name !== ""
            ? instructor.map((inst, i) => (
                <Text key={i} style={styles.instructor}>
                  {formatInstructor(inst)}
                </Text>
              ))
            : <Text style={styles.instructor}>No Instructor Listed</Text>}
        </View>
      </View>

    </View>
  )
}

function generateInfoOverlay(is_lab, has_time, type) {
  if (is_lab && !has_time) {
    const text = type === "lab" ? "Lab Time TBA" : "Section Online"
    return <Text className="info-overlay">{text}</Text>
  }
}

function formatInstructor(inst) {
  return inst.name ? Case.capital(inst.name).split(" ").join(", ") + "." : ""
}

function formatTime(time) {
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

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  dates: {
    flexDirection: "row",
  },
  date: {
    backgroundColor: "lightgray",
    fontSize: 25,
    padding: 10,
    borderRadius: 5,
  },
  dateSelected: {
    fontSize: 30,
    padding: 10,
    color: "white",
    backgroundColor: "black",
    borderRadius: 20,
  },
  time: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  timeBold: {
    fontWeight: "bold",
    fontSize: 20,
  },
  timeLight: {
    color: "lightgray",
    fontSize: 20,
  },
  location: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
  },
  instructor: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 24,
    marginBottom: 20,
  },
})

export default Interval
