function StudentCard ({student, editStudent, deleteStudent}) {
    return (
        <tr>
            <td> {student.rollNo} </td>
            <td> {student.name} </td>
            <td> {student.marks} </td>

            <td> 
                <button onClick={() =>  editStudent(student) }> 
                Edit </button>  
            <button onClick={() => deleteStudent(student.id)}> 
                Delete </button>
            </td>
        </tr>
    );
}

export default StudentCard; 
