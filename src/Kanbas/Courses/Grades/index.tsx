import { Button } from "react-bootstrap";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFilter, FaGear, FaRegKeyboard, FaUpload } from "react-icons/fa6";
import { FaRegSave, FaSearch } from "react-icons/fa";
import "./index.css";
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div style={{ width: "97%" }}>
      <div className="wd-import-container">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle wd-gradebook-drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Gradebook
          </button>
        </div>
        <div>
          <Button className="wd-key-button"><FaRegKeyboard className="m-1 mb-2" /></Button>
          <Button className="wd-import-button"><FaUpload className="m-1 mb-2" />Import</Button>
          <Button className="wd-export-button"><FaRegSave className="m-1 mb-2" />Export</Button>
          <Button className="wd-edit-button"><FaGear className="m-1" /></Button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <span className="m-1" style={{ fontWeight: "bold" }}>Student Names</span>
          <div className="input-group  mt-2">
            <div className="input-group-prepend">
              <span className="input-group-text pt-3 pb-2" id="basic-addon1" >
                <FaSearch />
              </span>
            </div>
            <select className="form-select" aria-label="Default select example">
              <option selected>Search Students</option>
            </select>
          </div>
        </div>
        <div className="col-6">
          <span className="m-1" style={{ fontWeight: "bold" }}>Assignment Names</span>
          <div className="input-group  mt-2">
            <div className="input-group-prepend">
              <span className="input-group-text pt-3 pb-2" id="basic-addon1" >
                <FaSearch />
              </span>
            </div>
            <select className="form-select" aria-label="Default select example">
              <option selected>Search Assignments</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-3" >
        <div className="col-3">
          <Button className="wd-filter-button"><FaFilter className="m-1" />Apply Filters</Button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped mt-3 border wd-border-thin">
          <thead>
            <tr>
              <th className="wd-th-student-name">Student Name</th>
              {as.map((assignment) => (<th key={assignment._id} className="wd-th-assignment">{assignment.title}<br />Out of 100</th>))}
            </tr>
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment.user}>
                  <td className="wd-grade-user-col">{user?.firstName} {user?.lastName}</td>
                  {as.map((assignment) => {
                    const grade = grades.find((grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return grade ? <td key={assignment._id} className="wd-grade-col">{grade.grade}</td> : null;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;