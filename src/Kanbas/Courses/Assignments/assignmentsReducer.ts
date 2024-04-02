import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";


const initialState:any = {
  assignments: [],
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
        (assignment:any) => assignment._id !== action.payload
      );
    },
    updateAssignments: (state, action) => {
      state.assignments = state.assignments.map((assignment:any) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    }
  },
});


export const { addAssignments, deleteAssignments,
  updateAssignments, setAssignments, setAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;

