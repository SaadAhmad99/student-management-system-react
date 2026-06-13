function StudnentCard ({student, editStudent, deleteStudent}) {
    return (
        <div>
            <h3> {student.name} </h3>
            <p> Roll No: {student.rollNo} </p>
            <p> Marks: {student.marks} </p>
            <button onClick={() =>  editStudent(student) }> 
                Edit </button>  
            <button onClick={() => deleteStudent(student.id)}> 
                Delete </button>
                <hr />
        </div>
    );
}

export default StudnentCard;