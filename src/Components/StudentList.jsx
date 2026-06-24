import StudentCard from "./StudentCard";

function StudentList({ students, editStudent, deleteStudent }) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Marks</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody> 
                {students.map((student) => (
                    <StudentCard
                        key={student.id}
                        student={student}
                        editStudent={editStudent}
                        deleteStudent={deleteStudent}
                    />  
                ))}
            </tbody>
        </table>
        );
    }
        
export default StudentList;