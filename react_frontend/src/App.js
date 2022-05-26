import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import ShowStudents from "./components/ShowStudents";
import AddStudents from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";
import StudentDetail from "./components/StudentDetail";

function App() {
  return (
    <div className="App">
        <h1 style={{'color': 'purple'}}>Dean Office</h1>
        <hr/>
        <h3 style={{'color': 'darkcyan'}}>Система управления персональными данными студентов</h3>
      <BrowserRouter>
        <Navbar />
         <Routes>
            <Route path="/" element={<ShowStudents/>} />
            <Route  path="/addStudent" element={<AddStudents/>} />
            <Route path="/update/:id" element={<UpdateStudent/>} />
            <Route path="/:id/" element={<StudentDetail/>} />
         </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
