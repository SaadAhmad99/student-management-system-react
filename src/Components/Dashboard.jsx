function Dashboard({ students }) {
    const totalStudents = students.length;
    const averageMarks = totalStudents > 0 ? (students.reduce((sum, student) => sum + student.marks, 0) / totalStudents).toFixed(2) : 0;

    const highestMarks = totalStudents > 0 ? Math.max(...students.map(student => student.marks)) : 0;
    const lowestMarks = totalStudents > 0 ? Math.min(...students.map(student => student.marks)) : 0;

    const passedStudents = students.filter(student => student.marks >= 50).length;
    const failedStudents = students.filter(student => student.marks < 50).length;

    return (
        <div>
            <h2>Dashboard</h2>

            <div className="dashboard">

                <div className="card">
                    <h3>Total Students</h3>
                    <p>{totalStudents}</p>
                </div>

                <div className="card">
                    <h3>Average Marks</h3>
                    <p>{averageMarks}</p>
                </div>

                <div className="card">
                    <h3>Highest Marks</h3>
                    <p>{highestMarks}</p>
                </div>

                <div className="card">
                    <h3>Lowest Marks</h3>
                    <p>{lowestMarks}</p>
                </div>

                <div className="card">
                    <h3>Passed Students</h3>
                    <p>{passedStudents}</p>
                </div>

                <div className="card">
                    <h3>Failed Students</h3>
                    <p>{failedStudents}</p>
                </div>

            </div>

            <hr />
        </div>
    );
}
export default Dashboard;