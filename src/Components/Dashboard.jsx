function Dashboard({students}) {
    const totalStudents = students.length;
    const averageMarks = totalStudents > 0 ? (students.reduce((sum, student) => sum + student.marks, 0) / totalStudents).toFixed(2) : 0;

    const highestMarks = totalStudents > 0 ? Math.max(...students.map(student => student.marks)) : 0;
    const lowestMarks = totalStudents > 0 ? Math.min(...students.map(student => student.marks)) : 0;

    const passedStudents = students.filter(student => student.marks >= 50).length;
    const failedStudents = students.filter(student => student.marks < 50).length;

    return (
        <div>
            <h2> Dashboard </h2>
            <p> Total Students: {totalStudents} </p>
            <p> Average Marks: {averageMarks} </p>
            <p> Highest Marks: {highestMarks} </p>
            <p> Lowest Marks: {lowestMarks} </p>
            <p> Passed Students: {passedStudents} </p>
            <p> Failed Students: {failedStudents} </p>
            <hr />
        </div>
    );      
}
export default Dashboard;