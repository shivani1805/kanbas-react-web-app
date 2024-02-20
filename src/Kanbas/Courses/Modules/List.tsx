import React, { useState } from "react";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { FaPlus, FaRegCircleCheck } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useParams } from "react-router";
import "./List.css"
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
    <div style={{display:"flex",justifyContent:"flex-end"}}>
      <Button className="wd-button">Collapse All</Button>
      <Button className="wd-button">View Progress</Button>
      
      <Button className="wd-button"><FaRegCircleCheck style={{color:"green",paddingRight:"3px",paddingBottom:"3px"}}/>Publish All</Button>
      
    <Button variant="danger" style={{marginLeft:"3px"}}><FaPlus style={{paddingRight:"4px",paddingBottom:"3px"}}/>Module</Button>
    <Button className="wd-button"><FaEllipsisV/></Button>
    </div>
    <hr style={{marginTop:"1em",marginBottom:"2em"}}/>

      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;

