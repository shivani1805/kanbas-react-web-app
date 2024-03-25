import React,{useState } from "react";
import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle, FaSortAmountDown } from "react-icons/fa";
import { Link, useParams,useNavigate } from "react-router-dom";
import {assignments} from "../../Database";
import "./index.css"
import { Button,Modal } from "react-bootstrap";
import { FaFilePen } from "react-icons/fa6";
import { useDispatch, useSelector} from "react-redux";
import { KanbasState } from "../../store";
import { deleteAssignments } from "./assignmentsReducer";

function Assignments() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { courseId } = useParams();
  // const assignmentList = assignments.filter(
  //   (assignment) => assignment.course === courseId);
  const assignmentList = useSelector((state:KanbasState) => state.assignmentReducer.assignments.filter(
    (assignment) => assignment.course===courseId));
    const new_assignment_id = assignmentList[0]._id.substring(0,3)+(parseInt(assignmentList[assignmentList.length-1]._id.substring(2))+1)
 const assignment = useSelector((state:KanbasState)=>state.assignmentReducer.assignment);

 const [showConfirmation, setShowConfirmation] = useState(false);
 const [assignmentToDelete, setAssignmentToDelete] = useState("");

 const handleDelete = (assignmentId:string) => {
  setAssignmentToDelete(assignmentId);
  setShowConfirmation(true);
};
const handleConfirmDelete = () => {
  dispatch(deleteAssignments(assignmentToDelete));
  setShowConfirmation(false);
};
const handleCloseConfirmation = () => {
  setShowConfirmation(false);
};
  return (
    <>
         <div className="wd-search-container">
            <input type="text" id="search-assignment" className="form-control w-25" placeholder="Search for Assignments"/>
            <div className="wd-search-buttons">
            <Button className="wd-group-button"><FaPlus className="wd-fa-plus-assignment"/>Group</Button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${new_assignment_id}`}>
            <Button  className="btn btn-danger p-2" style={{marginRight:"2px"}}><FaPlus className="wd-fa-plus-assignment"/>Assignment</Button>
            </Link>
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
                  
                  <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>No</Button>
          <Button variant="danger" onClick={handleConfirmDelete}>Yes</Button>
        </Modal.Footer>
      </Modal>
                 <Button className="wd-assignment-delete" variant="danger" onClick={() => handleDelete(assignment._id)}>Delete</Button>
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;