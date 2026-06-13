import StudentCard from "./StudentCard";

function StudentList({ students, editStudent, deleteStudent }) {
    return (
        <>  
        {
            students.map((student) => {
                return (
                    <StudentCard
                        key={student.id}
                        student={student}
                        editStudent={editStudent}
                        deleteStudent={deleteStudent}
                    />
                );
            })
        }
        </>
    );
}

export default StudentList;