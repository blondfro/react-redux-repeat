import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";
import CoursesList from "./CoursesList";

function CoursesPage({ ...props }) {
  useEffect(() => {
    props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed" + error);
    });
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CoursesList courses={props.courses} />
    </>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
