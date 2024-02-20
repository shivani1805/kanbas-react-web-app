import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaDesktop } from "react-icons/fa";
import {FaArrowRightFromBracket,FaRegCircleQuestion } from "react-icons/fa6";

function KanbasNavigation() {
  const links = [
  
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 user" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
    { label: "History",  icon: <FaRegClock className="fs-2" /> },
    { label: "Studio",  icon: <FaDesktop className="fs-2" /> },
    { label: "Commons",  icon: <FaArrowRightFromBracket className="fs-2" /> },
    { label: "Help",  icon: <FaRegCircleQuestion className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`} className={pathname.includes("Account") ? "wd-active-account" : ""}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;

