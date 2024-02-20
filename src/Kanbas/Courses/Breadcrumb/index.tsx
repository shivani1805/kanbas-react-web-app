import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { courses } from "../../Database";
import { useParams, useLocation, Link } from "react-router-dom"
import "./index.css";

function NavigationBreadcrumb() {
    const { courseId } = useParams();
    const routeName = useLocation();
    const path = routeName.pathname.substring(routeName.pathname.lastIndexOf('/') + 1); 
    const course = courses.find((course) => course._id === courseId);

  

  return (
    <Breadcrumb className="wd-brdcrmb">
      <Breadcrumb.Item className="wd-brdcrmb-course"><Link to={'Home'}>{course?.name}</Link></Breadcrumb.Item>
      <Breadcrumb.Item active style={{"color":"black"}}>{path.replace("%20", " ")}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default NavigationBreadcrumb;
