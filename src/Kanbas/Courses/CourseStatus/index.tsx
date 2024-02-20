import { Button } from "react-bootstrap"
import { FaBan } from "react-icons/fa";
import { Link } from "react-router-dom";
import {  FaArrowRightFromBracket, FaBullhorn, FaChartColumn, FaCrosshairs, FaFilePen, FaRegBell, FaRegCalendar, FaRegCircleCheck, FaUpload } from "react-icons/fa6";
import "./index.css";

function CourseStatus() {

return(
    <div>
<h5>Course Status</h5>
<div className="wd-buttons-container">
    <Button className="wd-button-unpub"><FaBan style={{paddingRight:"3px",paddingBottom:"3px"}}/>Unpublish</Button>
    <Button variant="success"><FaRegCircleCheck style={{paddingRight:"3px",paddingBottom:"3px"}}/>Published</Button>
</div>

<div className="wd-buttons-container-cs mt-3">
    <Button className="wd-button-cs wd-button-unpub"><FaUpload className="icon-course-status"/>Import Existing Content</Button><br/>
    <Button className="wd-button-cs wd-button-unpub"><FaArrowRightFromBracket className="icon-course-status"/>Import From Commons</Button><br/>
    <Button className="wd-button-cs wd-button-unpub"><FaCrosshairs className="icon-course-status"/>Choose Home Page</Button><br/>
    <Button className="wd-button-cs wd-button-unpub"><FaChartColumn className="icon-course-status"/>View Course Stream</Button><br/>
    <Button className="wd-button-cs wd-button-unpub"><FaBullhorn className="icon-course-status"/>New Announcement</Button><br/>
    <Button className="wd-button-cs wd-button-unpub"><FaChartColumn className="icon-course-status"/>New Analytics</Button><br/>
    <Button className="wd-button-cs wd-button-unpub"><FaRegBell className="icon-course-status"/>View Course Notifications</Button><br/>
</div>

<div className="wd-comingup-container mt-4">
<h5>Coming Up</h5>
<Link to={'#'} className="cal-link"><FaRegCalendar style={{fontSize:"large",color:"black"}}/> View Calendar</Link>

</div>
<hr style={{margin:"0px"}} className="mb-3"/>
<div className="wd-comingup-content-container">
        <ul className="list-group">
            <li><Link to={'#'}  className="cal-link"><FaFilePen className="icon-course-status"/>Lecture CS4550 Sep 7 at 11:45am</Link></li>
            <li><Link to={'#'}  className="cal-link"><FaFilePen className="icon-course-status"/>Lecture CS4550 Sep 11 at 11:45am</Link></li>
            <li><Link to={'#'}  className="cal-link"><FaFilePen className="icon-course-status"/>CS5610 06 SP23 Lecture Sep 11 at 6pm</Link></li>
        </ul>
    </div>
</div>
);

}
export default CourseStatus