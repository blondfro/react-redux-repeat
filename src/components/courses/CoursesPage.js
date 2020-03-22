import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";

function CoursesPage() {
  const [course, setCourse] = useState({ title: "" });

  const handleChange = (event) => {
    const course = { course, title: event.target.value };
    setCourse(course);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(course));
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
    </div>
  );
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

export default connect(mapStateToProps)(CoursesPage);
