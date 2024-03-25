import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";


const initialState = {
  assignments: assignments,
  assignment: { _id:"",course:"",title: "New Assignment", description: "New Description",points:"",Due:"",availableFrom:"",Until:"",module:"" },
};


const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignments: (state, action) => {
      
     state.assignments =[{...action.payload},...state.assignments,];
    

    },
    deleteAssignments: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignments: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignments: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignments, deleteAssignments,
  updateAssignments, setAssignments } = assignmentSlice.actions;
export default assignmentSlice.reducer;

