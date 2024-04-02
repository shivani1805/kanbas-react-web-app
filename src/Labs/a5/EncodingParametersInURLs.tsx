import React, { useEffect,useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
function EncodingParametersInURLs() {
 

const COURSES_API = `${API_BASE}/api/courses`; 
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const handleInputChangeA = (e:any) => {
    setA(parseInt(e.target.value, 10));
  };

  const handleInputChangeB = (e:any) => {
    setB(parseInt(e.target.value, 10));
  };
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get(`${API_BASE}/a5/welcome`);
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);

  const [result, setResult] = useState(0);
  const fetchSum = async (a:any, b:any) => {
    const response = await
      axios.get(`${API_BASE}/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a:any, b:any) => {
    const response = await axios.get(
      `${API_BASE}/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };


  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input type="number" value={a}
        onChange={handleInputChangeA}/><br/>
      <input type="number"
       onChange={handleInputChangeB} value={b}/>
       <input value={result} type="number" readOnly />
      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)} >
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)} >
        Fetch Substraction of {a} - {b}
      </button>

      <h3>Path Parameters</h3>
      <Button>      <a  style={{color:"white",textDecoration:"none"}} href={`${API_BASE}/a5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      </Button>
      <Button variant="danger">
      <a  style={{color:"white",textDecoration:"none"}}  href={`${API_BASE}/a5/subtract/${a}/${b}`}>
        Substract {a} - {b}
      </a>
      </Button><br/><br/>
      <Button>      <a  style={{color:"white",textDecoration:"none"}} href={`${API_BASE}/a5/multiply/${a}/${b}`}>
      Multiply {a} * {b}
      </a>
      </Button>
      <Button variant="danger">
      <a  style={{color:"white",textDecoration:"none"}}  href={`${API_BASE}/a5/divide/${a}/${b}`}>
      Divide {a} / {b}
      </a>
      </Button>
      <h3>Query Parameters</h3>
            <a className="btn btn-primary"
              href={`${API_BASE}/a5/calculator?operation=add&a=${a}&b=${b}`}>
              Add {a} + {b}
            </a>
            <a className="btn btn-danger"
              href={`${API_BASE}/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
              Substract {a} - {b}
            </a>
            <br/><br/>
            <a className="btn btn-primary"
              href={`${API_BASE}/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
              Multiply {a} * {b}
            </a> 
            <a className="btn btn-danger"
              href={`${API_BASE}/a5/calculator?operation=divide&a=${a}&b=${b}`}>
              Divide {a} / {b}
            </a> 
            <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>

    </div>
  );
}
export default EncodingParametersInURLs;

