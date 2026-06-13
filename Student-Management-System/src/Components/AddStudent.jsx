

function AddStudent({rollNo, setRollNo, name, setName, marks, setMarks, addStudent}) {
    return (
        <div>
          <h2> Add Student </h2>

          <input type="text" placeholder="Enter Student Roll No" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />

          <br />
          <br />

          <input type="text" placeholder="Enter Student Name" value={name} onChange={(e) => setName(e.target.value)} />

          <br />
          <br />

          <input type="number" placeholder="Marks" value={marks} onChange={(e) => setMarks(e.target.value)} />

          <br />
          <br />

          <button onClick={addStudent}> Add Student </button>
          
          <hr />

        </div>  

    );

}

export default AddStudent;