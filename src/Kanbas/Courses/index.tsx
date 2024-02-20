import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import NavigationBreadcrumb from "./Breadcrumb";
import Button from 'react-bootstrap/Button';
import Modules from "./Modules";
import { FaGlasses } from "react-icons/fa";
import "./index.css"
import Home from "./Home";
import Assignments from "./Assignments";
import Grades from "./Grades";
import AssignmentEditor from "./Assignments/Editor";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (

    <div>
      <div  style={{display:"flex"}}>
      <HiMiniBars3 style={{"color":"red",paddingLeft:"30px",fontSize:"3.5em"}}/><NavigationBreadcrumb/>
      <div style={{ marginLeft: 'auto' }}>
      <Button className="wd-button-view"><FaGlasses style={{paddingRight:"3px",paddingBottom:"3px"}}/>Student View</Button>
      </div>
      </div>
      <hr  style={{ width: '100%' }} />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "100px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades/>} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
            <Route path="Settings" element={<h1>Settings</h1>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="People" element={<h1>People</h1>} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses