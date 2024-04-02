import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// import * as db from "./Database";
import { useState,useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
function Kanbas() {
   // const [courses, setCourses] = useState<any[]>([]);
   
   const [courses, setCourses] = useState<any>({ _id: "" });
   


   const [course, setCourse] = useState<any>({ _id: "" });
 
   // const [course, setCourse] = useState({
   //    _id: "1234", name: "New Course", number: "New Number",
   //    startDate: "2023-09-10", endDate: "2023-12-15",
   //    image: "../images/reactjs.jpg"
   // });
   // const addNewCourse = () => {
   //    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
   // };
   // const deleteCourse = (courseId: any) => {
   //    setCourses(courses.filter((course) => course._id !== courseId));
   // };
   // const updateCourse = () => {
   //    setCourses(
   //       courses.map((c) => {
   //          if (c._id === course._id) {
   //             return course;
   //          } else {
   //             return c;
   //          }
   //       })
   //    );
   // };

   // "https://kanbas-node-server-app-luzc.onrender.com/api/courses";  //"http://localhost:4000/api/courses";
   const { courseId } = useParams(); 

   const findCourseById = async (courseId?: string) => {
      const response = await axios.get(
        `${COURSES_API}/${courseId}`
      );
      setCourse(response.data);
    };


   const updateCourse = async () => {
      const response = await axios.put(
        `${COURSES_API}/${courses._id}`,
        courses
      );
      setCourses(
        courses.map((c:any) => {
          if (c._id === courses._id) {
            return courses;
          }
          return c;
        })
      );
    };

    const deleteCourse = async (courseId: string) => {
      const response = await axios.delete(
        `${COURSES_API}/${courseId}`
      );
      setCourses(courses.filter(
        (c:any) => c._id !== courseId));
    };
  
  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, courses);
    setCourses([ ...courses, response.data ]);
  };

  
   const findAllCourses = async () => {
     const response = await axios.get(COURSES_API);
     setCourses(response.data);
   };
   useEffect(() => {
     findAllCourses();
   }, []);
  //  useEffect(() => {
  //     findCourseById(courseId);
  //   }, [courseId]);
  

   return (
      <Provider store={store}>
      <div className="d-flex">
         <KanbasNavigation />
         <div style={{ flexGrow: 1 }}>
            <Routes>
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="Account" element={<h1>Account</h1>} />
               <Route path="Dashboard" element={<Dashboard />} />
               <Route path="Courses/*" element={<h1>Courses</h1>} />
               <Route path="Courses/:courseId/*" element={<Courses/>} />

            </Routes>

         </div>
      </div>
      </Provider>

   );
}
export default Kanbas