import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

const ManageCoursePage = ({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  history,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.course]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse((prevState) => ({
      ...prevState,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    saveCourse(course).then(() => {
      history.push("/courses");
    });
  };

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export const getCourseBySlug = (courses, slug) => {
  return courses.find((course) => course.slug === slug) || null;
};

const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course: course,
    courses: state.courses,
    authors: state.authors,
  };
};

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
  saveCourse: courseActions.saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
