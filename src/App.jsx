import { useState, useEffect } from 'react';
import AddStudent from "./Components/AddStudent";
import SearchStudent from "./Components/SearchStudent";
import StudentList from "./Components/StudentList";
import EditStudent from "./Components/EditStudent";
import Dashboard from './Components/Dashboard';
import SortStudents from "./Components/SortStudents";
import './App.css';

function App() {

  const [sortType, setSortType] = useState("name");
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedMarks, setEditedMarks] = useState("");
  const [editedRollNo, setEditedRollNo] = useState("");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function addStudent() {
    if (rollNo.trim() === "" || name.trim() === "" || marks.trim() === "" || isNaN(marks)) {
      alert("Please fill in all fields.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      marks: Number(marks),
      rollNo: rollNo
    };

    const exist = students.some((student) => student.rollNo === rollNo);
    if (exist) {
      alert("Roll No already exists. Please use a unique Roll No.");
      return;
    }

    setStudents([...students, newStudent]);
    setName("");
    setMarks("");
    setRollNo("");
  }

  function deleteStudent(id) {
    const updateStudents = students.filter((student) => student.id !== id);
    setStudents(updateStudents);
  }

  function editStudent(student) {
    setEditingId(student.id);
    setEditedName(student.name);
    setEditedMarks(student.marks);
    setEditedRollNo(student.rollNo);
  }

  function saveEditedStudent() {

    if (
      editedRollNo.trim() === "" ||
      editedName.trim() === "" ||
      editedMarks.trim() === "" ||
      isNaN(editedMarks)
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedStudents = students.map((student) => {
      if (student.id === editingId) {
        return { ...student, rollNo: editedRollNo, name: editedName, marks: Number(editedMarks) };
      }
      return student;
    });
    setStudents(updatedStudents);
    setEditingId(null);
    setEditedName("");
    setEditedMarks("");
    setEditedRollNo("");
  }

  function cancelEdit() {
    setEditingId(null);
    setEditedRollNo("");
    setEditedName("");
    setEditedMarks("");
  }

  let filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(search.toLowerCase())
  );

  if (sortType === "name") {
    filteredStudents.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortType === "marks") {
    filteredStudents.sort((a, b) =>
      b.marks - a.marks
    );
  }

  return (

    <div className="App">
      <h1> Student Management System</h1>
      <hr />

      <AddStudent rollNo={rollNo} setRollNo={setRollNo} name={name} setName={setName} marks={marks} setMarks={setMarks} addStudent={addStudent} />

      <hr />

      <SearchStudent search={search} setSearch={setSearch} />


      <EditStudent
        editingId={editingId}
        editedRollNo={editedRollNo}
        setEditedRollNo={setEditedRollNo}
        editedName={editedName}
        setEditedName={setEditedName}
        editedMarks={editedMarks}
        setEditedMarks={setEditedMarks}
        saveEditedStudent={saveEditedStudent}
        cancelEdit={cancelEdit}
      />

      <SortStudents setSortType={setSortType} />
      
      <Dashboard students={students} />

      <h2> Student List  </h2>

      <StudentList
        students={filteredStudents}
        editStudent={editStudent}
        deleteStudent={deleteStudent}



      />


    </div>

  );

}
export default App;