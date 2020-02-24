import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleChange } from "./course.actions";
import {} from "./course.reducer";

const CoursesPage = () => {
 //  const [course, setCourse] = useState({ title: " " });
 const course = useSelector(state => state.course);
 const dispatch = useDispatch();

 return (
  <form>
   <h2>Courses</h2>
   <h3>Add Courses</h3>
   <input
    type="text"
    onChange={event => dispatch(handleChange(event.target.value))}
    value={course.title}
    placeholder="Search..."
   />
   <input type="submit" value="save" />
   <h1>Courses:{course.title}</h1>
  </form>
 );
};

export default CoursesPage;
