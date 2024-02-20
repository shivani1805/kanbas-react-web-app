import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { Button } from "react-bootstrap";
import "./index.css";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    
    <div style={{width:"95%"}}>
    
            <div className="wd-search-buttons pb-2">
              <span className="wd-publish"><FaCheckCircle className="wd-edit-publish-icon"/>Published</span>
              <Button className="wd-edit-ellipsis-icon"><FaEllipsisV/></Button>
          </div>
          <hr/>
        <div>

 
      <span className="m-2" >Assignment Name</span>
      <input value={assignment?.title}
             className="form-control mb-2" />
      <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light float-end">
        Cancel
      </Link>
      </div>
    
    </div>
  );
}
export default AssignmentEditor;

