import logo from "./logo.svg";
import "./App.css";
import Math from "./Math.js";
import Total from "./Total.js";
import Icard from "./Icard.js";
import List from "./List.js";
import Hi from "./Hi";
import Halfstring from "./Halfstring.js";
import ULCR from "./ULCR.js";
import Navbar from "./Navbar.js";
import StudentData from "./StudentData.js";
import EduDetails from "./EduDetails.js";
import Validate from "./Validate.js"
import ShowList from "./ShowList"
import Monthname from "./Monthname.js";
import SayHi from "./SayHi.js";

function App() {
  let obj = { n: "Chitra", p: "123456" };
  console.log("type of obj",typeof(obj));
  return (
    <>
      <h1>Chitra</h1>
      {/* <Math num1={13} num2={13} op={"+"}></Math> */}
      {/* <Total nums={[1, 10, 20, 13]}></Total> */}
      {/* <Icard obj={obj}></Icard> */}
      {/* <Halfstring></Halfstring> */}
      {/* <List></List> */}
      {/* <Hi name={"Chitra"}></Hi> */}
      {/* <ULCR></ULCR> */}
      {/* <Navbar></Navbar> */}
      {/* <StudentData></StudentData> */}
      {/* <Validate></Validate> */}
      {/* <ShowList></ShowList> */}
      {/* <Monthname></Monthname> */}
      <SayHi name={"Chitra"}></SayHi>
      
    </>
  );
}

export default App;
