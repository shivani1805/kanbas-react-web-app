import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API =  `${API_BASE}/api/courses`; //"http://localhost:4000/api/courses";
const ASSIGNMENT_API =  `${API_BASE}/api/assignments`; //"http://localhost:4000/api/assignments";

export const createAssignments = async (courseId:any, assignment:any) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/assignments`,
      assignment
    );
    return response.data;
  };


export const deleteAssignment = async (assignmentId:any) => {
  const response = await axios
    .delete(`${ASSIGNMENT_API}/${assignmentId}`);
  return response.data;
};

export const updateAssignment = async (assignment:any) => {
    const response = await axios.
      put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return response.data;
  };
  
  ;
