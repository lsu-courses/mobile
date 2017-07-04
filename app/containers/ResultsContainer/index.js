import React, { Component } from "react"
import { View, ScrollView } from "react-native"
import Loading from "../../components/Results/Loading"
import Course from "../../components/Results/Course"
import EmptyState from "../../components/Results/EmptyState"
import Instructions from "../../components/Instructions"

class ResultsContainer extends Component {
  state = {
    results: [
      {
        abbreviation: "CSC",
        number: "1240",
        hours: "3.0",
        full_title: "Statistics and Graphics with MATLAB",
        description:
          "This is a General Education course. Prereq.: MATH 1021   or placement in MATH 1022 , MATH 1023 , MATH 1431 , MATH 1550  or MATH 1551 . Credit will not be given for both this course and CSC 2262  or CSC 2533  or OCS 2011 . Not for degree credit for computer science majors. 2 hrs. lecture; 2 hrs. lab.",
        comments: [
          "CSC 1240 - TWO EXAMS ON A TUESDAY 6:00 - 8:00PM",
          "CSC 1240 (S1-LAB): PFT 1124-A",
          "CSC 1240 (S2-LAB): PFT 1124-B",
          "CSC 1240 (S3-LAB): PFT 1131",
        ],
        sections: [
          {
            number: "01",
            title: "STATS & GRAPH MATLB",
            enrollment_available: "54",
            enrollment_current: "6",
            enrollment_is_full: "false",
            enrollment_total: "60",
            timeIntervals: [
              {
                start: "1130",
                end: "0120",
                has_time: true,
                days: ["FRIDAY"],
                comments: [],
                location_building: "",
                location_room: "",
                is_lab: true,
                s_night: false,
                s_all_web: false,
                s_most_web: false,
                s_half_web: false,
                s_some_web: false,
                s_req_dept_perm: false,
                s_req_inst_perm: false,
                s_majors_only: false,
                s_cmi: false,
                s_cmi_written: false,
                s_cmi_spoken: false,
                s_cmi_tech: false,
                s_cmi_visual: false,
                s_svc: false,
                instructor: [
                  {
                    name: "BRENER N",
                  },
                ],
              },
              {
                start: "1130",
                end: "1220",
                has_time: true,
                days: ["MONDAY", "WEDNESDAY"],
                comments: [],
                location_building: "COATES",
                location_room: "0152",
                is_lab: false,
                s_night: false,
                s_all_web: false,
                s_most_web: false,
                s_half_web: false,
                s_some_web: false,
                s_req_dept_perm: false,
                s_req_inst_perm: false,
                s_majors_only: false,
                s_cmi: false,
                s_cmi_written: false,
                s_cmi_spoken: false,
                s_cmi_tech: false,
                s_cmi_visual: false,
                s_svc: false,
                instructor: [
                  {
                    name: "BRENER N",
                  },
                ],
              },
            ],
          },
          {
            number: "02",
            title: "STATS & GRAPH MATLB",
            enrollment_available: "36",
            enrollment_current: "0",
            enrollment_is_full: "false",
            enrollment_total: "36",
            timeIntervals: [
              {
                start: "1130",
                end: "0120",
                has_time: true,
                days: ["FRIDAY"],
                comments: [],
                location_building: "",
                location_room: "",
                is_lab: true,
                s_night: false,
                s_all_web: false,
                s_most_web: false,
                s_half_web: false,
                s_some_web: false,
                s_req_dept_perm: false,
                s_req_inst_perm: false,
                s_majors_only: false,
                s_cmi: false,
                s_cmi_written: false,
                s_cmi_spoken: false,
                s_cmi_tech: false,
                s_cmi_visual: false,
                s_svc: false,
                instructor: [
                  {
                    name: "BRENER N",
                  },
                ],
              },
              {
                start: "1130",
                end: "1220",
                has_time: true,
                days: ["MONDAY", "WEDNESDAY"],
                comments: [],
                location_building: "COATES",
                location_room: "0152",
                is_lab: false,
                s_night: false,
                s_all_web: false,
                s_most_web: false,
                s_half_web: false,
                s_some_web: false,
                s_req_dept_perm: false,
                s_req_inst_perm: false,
                s_majors_only: false,
                s_cmi: false,
                s_cmi_written: false,
                s_cmi_spoken: false,
                s_cmi_tech: false,
                s_cmi_visual: false,
                s_svc: false,
                instructor: [
                  {
                    name: "BRENER N",
                  },
                ],
              },
            ],
          },
          {
            number: "03",
            title: "STATS & GRAPH MATLB",
            enrollment_available: "36",
            enrollment_current: "0",
            enrollment_is_full: "false",
            enrollment_total: "36",
            timeIntervals: [
              {
                start: "1130",
                end: "0120",
                has_time: true,
                days: ["FRIDAY"],
                comments: [],
                location_building: "",
                location_room: "",
                is_lab: true,
                s_night: false,
                s_all_web: false,
                s_most_web: false,
                s_half_web: false,
                s_some_web: false,
                s_req_dept_perm: false,
                s_req_inst_perm: false,
                s_majors_only: false,
                s_cmi: false,
                s_cmi_written: false,
                s_cmi_spoken: false,
                s_cmi_tech: false,
                s_cmi_visual: false,
                s_svc: false,
                instructor: [
                  {
                    name: "BRENER N",
                  },
                ],
              },
              {
                start: "1130",
                end: "1220",
                has_time: true,
                days: ["MONDAY", "WEDNESDAY"],
                comments: [],
                location_building: "COATES",
                location_room: "0152",
                is_lab: false,
                s_night: false,
                s_all_web: false,
                s_most_web: false,
                s_half_web: false,
                s_some_web: false,
                s_req_dept_perm: false,
                s_req_inst_perm: false,
                s_majors_only: false,
                s_cmi: false,
                s_cmi_written: false,
                s_cmi_spoken: false,
                s_cmi_tech: false,
                s_cmi_visual: false,
                s_svc: false,
                instructor: [
                  {
                    name: "BRENER N",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        abbreviation: "CSC",
        number: "1240",
        hours: "3.0",
        full_title: "Statistics and Graphics with MATLAB",
        description:
          "This is a General Education course. Prereq.: MATH 1021   or placement in MATH 1022 , MATH 1023 , MATH 1431 , MATH 1550  or MATH 1551 . Credit will not be given for both this course and CSC 2262  or CSC 2533  or OCS 2011 . Not for degree credit for computer science majors. 2 hrs. lecture; 2 hrs. lab.",
        comments: [
          "CSC 1240 - TWO EXAMS ON A TUESDAY 6:00 - 8:00PM",
          "CSC 1240 (S1-LAB): PFT 1124-A",
          "CSC 1240 (S2-LAB): PFT 1124-B",
          "CSC 1240 (S3-LAB): PFT 1131",
        ],
        sections: [
          {
            number: "01",
            title: "STATS & GRAPH MATLB",
            enrollment_available: "54",
            enrollment_current: "6",
            enrollment_is_full: "false",
            enrollment_total: "60",
            timeIntervals: [
              {
                start: "1130",
                end: "0120",
                has_time: true,
                days: ["FRIDAY"],
                comments: [],
                location_building: "",
                location_room: "",
                is_lab: true,
                s_night: false,
                s_all_web: false,
                s_most_web: false,
                s_half_web: false,
                s_some_web: false,
                s_req_dept_perm: false,
                s_req_inst_perm: false,
                s_majors_only: false,
                s_cmi: false,
                s_cmi_written: false,
                s_cmi_spoken: false,
                s_cmi_tech: false,
                s_cmi_visual: false,
                s_svc: false,
                instructor: [
                  {
                    name: "BRENER N",
                  },
                ],
              },
              {
                start: "1130",
                end: "1220",
                has_time: true,
                days: ["MONDAY", "WEDNESDAY"],
                comments: [],
                location_building: "COATES",
                location_room: "0152",
                is_lab: false,
                s_night: false,
                s_all_web: false,
                s_most_web: false,
                s_half_web: false,
                s_some_web: false,
                s_req_dept_perm: false,
                s_req_inst_perm: false,
                s_majors_only: false,
                s_cmi: false,
                s_cmi_written: false,
                s_cmi_spoken: false,
                s_cmi_tech: false,
                s_cmi_visual: false,
                s_svc: false,
                instructor: [
                  {
                    name: "BRENER N",
                  },
                ],
              },
            ],
          },
          {
            number: "02",
            title: "STATS & GRAPH MATLB",
            enrollment_available: "36",
            enrollment_current: "0",
            enrollment_is_full: "false",
            enrollment_total: "36",
            timeIntervals: [
              {
                start: "1130",
                end: "0120",
                has_time: true,
                days: ["FRIDAY"],
                comments: [],
                location_building: "",
                location_room: "",
                is_lab: true,
                s_night: false,
                s_all_web: false,
                s_most_web: false,
                s_half_web: false,
                s_some_web: false,
                s_req_dept_perm: false,
                s_req_inst_perm: false,
                s_majors_only: false,
                s_cmi: false,
                s_cmi_written: false,
                s_cmi_spoken: false,
                s_cmi_tech: false,
                s_cmi_visual: false,
                s_svc: false,
                instructor: [
                  {
                    name: "BRENER N",
                  },
                ],
              },
              {
                start: "1130",
                end: "1220",
                has_time: true,
                days: ["MONDAY", "WEDNESDAY"],
                comments: [],
                location_building: "COATES",
                location_room: "0152",
                is_lab: false,
                s_night: false,
                s_all_web: false,
                s_most_web: false,
                s_half_web: false,
                s_some_web: false,
                s_req_dept_perm: false,
                s_req_inst_perm: false,
                s_majors_only: false,
                s_cmi: false,
                s_cmi_written: false,
                s_cmi_spoken: false,
                s_cmi_tech: false,
                s_cmi_visual: false,
                s_svc: false,
                instructor: [
                  {
                    name: "BRENER N",
                  },
                ],
              },
            ],
          },
          {
            number: "03",
            title: "STATS & GRAPH MATLB",
            enrollment_available: "36",
            enrollment_current: "0",
            enrollment_is_full: "false",
            enrollment_total: "36",
            timeIntervals: [
              {
                start: "1130",
                end: "0120",
                has_time: true,
                days: ["FRIDAY"],
                comments: [],
                location_building: "",
                location_room: "",
                is_lab: true,
                s_night: false,
                s_all_web: false,
                s_most_web: false,
                s_half_web: false,
                s_some_web: false,
                s_req_dept_perm: false,
                s_req_inst_perm: false,
                s_majors_only: false,
                s_cmi: false,
                s_cmi_written: false,
                s_cmi_spoken: false,
                s_cmi_tech: false,
                s_cmi_visual: false,
                s_svc: false,
                instructor: [
                  {
                    name: "BRENER N",
                  },
                ],
              },
              {
                start: "1130",
                end: "1220",
                has_time: true,
                days: ["MONDAY", "WEDNESDAY"],
                comments: [],
                location_building: "COATES",
                location_room: "0152",
                is_lab: false,
                s_night: false,
                s_all_web: false,
                s_most_web: false,
                s_half_web: false,
                s_some_web: false,
                s_req_dept_perm: false,
                s_req_inst_perm: false,
                s_majors_only: false,
                s_cmi: false,
                s_cmi_written: false,
                s_cmi_spoken: false,
                s_cmi_tech: false,
                s_cmi_visual: false,
                s_svc: false,
                instructor: [
                  {
                    name: "BRENER N",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }

  renderResults() {
    if (this.props.current_set && this.props.current_set.length > 0) {
      return this.props.current_set.map((course, i) =>
        <Course course={course} key={i} />
      )
    } else if (this.props.has_search) {
      return <EmptyState search={this.props.search_input} />
    } else {
      return <Instructions />
    }
  }

  render() {
    return (
      <ScrollView style={{ marginBottom: 10 }}>
        {this.props.current_loading ? <Loading /> : this.renderResults()}
      </ScrollView>
    )
  }
}

export default ResultsContainer
