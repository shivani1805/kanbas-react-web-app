import { Link, useLocation } from "react-router-dom";
import "./index.css"; 
function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings","Quizzes","People",
   "Grades", "Assignments","Panopto Video","Discussions","Announcements","Pages"
   ,"Files","Rubrics","Outcomes","Collaborations","Syllabus","Settings"];
  const { pathname } = useLocation();
  return (
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""
         || pathname.includes("Zoom") && link==="Zoom Meetings"? "wd-active" : ""
         || pathname.includes("Panopto") && link==="Panopto Video"? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;

