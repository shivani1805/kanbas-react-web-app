import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { Button } from "react-bootstrap";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../../store";
import {addAssignments, deleteAssignments, updateAssignments, setAssignments,} from "../assignmentsReducer";

function AssignmentEditor() {


  const { courseId,assignmentId } = useParams();


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignmentList = useSelector((state: KanbasState) =>
    state.assignmentReducer.assignments);
  const assignment = useSelector((state: KanbasState) =>
    state.assignmentReducer.assignment);

  const check_exisiting_assignment = assignmentList.find((assignment)=>assignment._id===assignmentId)
  useEffect(()=>{
    if(check_exisiting_assignment!==undefined){
      dispatch(setAssignments(check_exisiting_assignment))
    } else{
      dispatch(setAssignments([]))
    }
  },[])
  const handleSave = () => {
     if(check_exisiting_assignment!==undefined){
      dispatch(updateAssignments(assignment))
     } else{
      dispatch(addAssignments({...assignment,course:courseId,_id:assignmentId}))
     };
     navigate(`/Kanbas/Courses/${courseId}/Assignments`)
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
      <input value={assignment?.title}  onChange={(e)=>dispatch(setAssignments({...assignment,title:e.target.value}))}
             className="form-control mb-2" />
                <form id="text-area">
                    <textarea id="assignment-description" className="form-control mt-3 pt-3"  value={assignment?.description}
                      onChange={(e)=>dispatch(setAssignments({...assignment,description:e.target.value}))} ></textarea>
                  </form>
                  <div className="row align-items-top pb-3" >
                    <div className="col-3 text-end mt-2">
                        <label >Points</label>
                    </div>
                    <div className="col-9 mt-2">
                            <input id="points-text" className="form-control" value={assignment?.points} 
                              onChange={(e)=>dispatch(setAssignments({...assignment,points:e.target.value}))}/>
                    </div>
                    </div>

                    <div className="row align-items-top" >
                        <div className="col-3 text-end">
                            <label>Assign</label>
                        </div>
                        <div className="col-9 ">
                            <div className="assign-div-box border border-dark rounded p-4">
                    <label className="form-check-label" style={{"fontWeight": "bold"}}>
                          Due
                          </label>
                          <input type="date" id="date-field-due" className="form-control " value={assignment?.Due} 
                            onChange={(e)=>dispatch(setAssignments({...assignment,Due:e.target.value}))}/>
                          <div className="row">
                          <div className="col-6"> 
                              <label className="form-check-label pt-3" style={{"fontWeight": "bold"}}>
                                  Available from
                                  </label>
                                  <input type="date" id="date-field-due" className="form-control " value={assignment?.availableFrom}
                                    onChange={(e)=>dispatch(setAssignments({...assignment,availableFrom:e.target.value}))}/>
                              </div>
                              <div className="col-6"> 
                                  <label className="form-check-label pt-3" style={{"fontWeight": "bold"}}>
                                      Until
                                      </label>
                                      <input type="date" id="date-field-due" className="form-control " value={assignment?.Until}
                                        onChange={(e)=>dispatch(setAssignments({...assignment,Until:e.target.value}))}/>
                                  
                              </div>
                              </div>
                              </div>
                              </div>
                              </div>

       <div className="mt-3">
      <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light float-end">
        Cancel
      </Link>
      </div>
      </div>
    
    </div>
  );
}
export default AssignmentEditor;

