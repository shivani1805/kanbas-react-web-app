import React,{useState} from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import "./index.css";
import Button from 'react-bootstrap/Button';
function Dashboard( { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;  }) {
 
    

  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   _id: "0", name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  //   image: "/images/reactjs.jpg"
  // });
  // const addNewCourse = () => {
  //   const newCourse = { ...course,
  //                       _id: new Date().getTime().toString() };
  //   setCourses([...courses, { ...course, ...newCourse }]);
  // };
  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };



  return (
    <div className="p-4">
      <h1>Dashboard</h1>  
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
 
      <div className="pt-2"> 
      <Button className="wd-module-add" onClick={addNewCourse} >
        Add
      </Button>
      <Button className="wd-module-udpate"  onClick={updateCourse} >
        Update
      </Button>
      </div>

           <hr />
      <h2>Published Courses (3)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                   {course.number} {course.name}  
                   
 </Link>
                  <p className="card-text">{course.name}</p>
                    <div>
                   <Button size="sm"  className="wd-course-edit" onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </Button>

                   <Button size="sm" variant="danger" style={{"marginLeft":"2px"}} onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
              </Button>
              </div>
              <br/>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                    
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

