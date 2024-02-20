import React from "react";
import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {assignments} from "../../Database";
import "./index.css"
import { Button } from "react-bootstrap";
import { FaFilePen } from "react-icons/fa6";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
         <div className="wd-search-container">
            <input type="text" id="search-assignment" className="form-control w-25" placeholder="Search for Assignments"/>
            <div className="wd-search-buttons">
            <Button className="wd-group-button"><FaPlus className="wd-fa-plus-assignment"/>Group</Button>
            <Button className="btn btn-danger" style={{marginRight:"2px"}}><FaPlus className="wd-fa-plus-assignment"/>Assignment</Button>
            <Button className="wd-edit-button"><FaEllipsisV/></Button>
        </div>
        </div>
        <hr/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /><FaCaretDown/> ASSIGNMENTS
            <span className="float-end">
            <span className="badge rounded-pill bg-light text-dark" style={{padding: "4px", backgroundColor: "whitesmoke", fontWeight: "normal"}}>40% of Total</span>
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" /><FaFilePen className="wd-filepen"/>
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link><br/>
                 <span className="wd-assignment-details">  <span className="wd-assignment-module">{assignment.module} </span>| <b>Due</b> {assignment.Due} | {assignment.points}</span> 
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;