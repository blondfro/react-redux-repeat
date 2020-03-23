import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";

function CoursesPage({ ...props }) {
  const [course, setCourse] = useState({ title: "" });

  const handleChange = (event) => {
    const course = { course, title: event.target.value };
    setCourse(course);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.actions.createCourse(course);
    setCourse({ ...course, title: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={handleChange} value={course.title} />
        <input type="submit" value="Save" />
      </form>
      {props.courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))}
    </div>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired,
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
