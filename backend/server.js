const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const students = [
  {
    id: 1,
    rollNo: "101",
    name: "Saad",
    marks: 90
  }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(
        (student) => student.id === id
    );

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    res.json(student);
});

app.post("/students", (req, res) => {

  const newStudent = req.body;

  students.push(newStudent);

  res.json({
    message: "Student Added Successfully",
    student: newStudent
  });

});

app.put("/students/:id", (req, res) => {

  const id = Number(req.params.id);

  const student = students.find(
    (student) => student.id === id
  );

  if (!student) {
    return res.status(404).json({
      message: "Student Not Found"
    });
  }

  student.rollNo = req.body.rollNo;
  student.name = req.body.name;
  student.marks = req.body.marks;

  res.json({
    message: "Student Updated Successfully",
    student: student
  });

});

app.delete("/students/:id", (req, res) => {

  const id = Number(req.params.id);

  const studentIndex = students.findIndex(
    (student) => student.id === id
  );

  if (studentIndex === -1) {
    return res.status(404).json({
      message: "Student Not Found"
    });
  }

  const deletedStudent = students.splice(studentIndex, 1);

  res.json({
    message: "Student Deleted Successfully",
    student: deletedStudent[0]
  });

});


app.listen(5000, () => {
  console.log("Server Started");
});