import React, { useState } from "react";

function CoursesPage() {
  const [course, setCourse] = useState({ title: "" });

  const handleChange = (event) => {
    const course = { course, title: event.target.value };
    setCourse(course);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(course.title);
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

export default CoursesPage;
