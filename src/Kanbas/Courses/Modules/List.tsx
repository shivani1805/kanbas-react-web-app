import React, { useState } from "react";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { FaPlus, FaRegCircleCheck } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router";
import "./List.css"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";



function ModuleList() {
  const { courseId } = useParams();
  //  const modulesList = modules.filter((module) => module.course === courseId);
  //const [moduleList, setModuleList] = useState<any[]>(modules);
  
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
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

       <div className="p-1">
       <input className="form-control" value={module.name} onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea className="form-control"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/><div className="pt-2">
           <Button className="wd-module-add" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </Button>
        
        <Button className="wd-module-update" onClick={() => dispatch(updateModule(module))}>
          Update
        </Button>
        </div>
       </div>
      <ul className="list-group wd-modules">
   

        {moduleList.filter((module) => module.course === courseId).map((module) => (
          <li className="list-group-item" onClick={() => setSelectedModule(module)}>
             
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
              <Button className="wd-button wd-module-edit"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </Button>
            <Button  className="wd-module-delete" variant="danger" style={{marginLeft:"3px"}}
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </Button>

                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />   
                <FaEllipsisV className="ms-2" />
               
              </span><br/>
              <span className="wd-module-description">{module.description}</span>
              
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: any, index: number) => (
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

