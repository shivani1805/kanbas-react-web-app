import CourseStatus from "../CourseStatus";
import ModuleList from "../Modules/List";
import "./index.css"

function Home() {
  return (
    <div className="wd-home-div">
        <div className="wd-mod-div">
      <ModuleList />
      </div>
      <div className="wd-course-status-div">
      <CourseStatus/>
      </div>
    </div>
  );
}
export default Home;

