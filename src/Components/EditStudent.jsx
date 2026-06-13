function EditStudent({ editingId, editedRollNo, setEditedRollNo, editedName, setEditedName, editedMarks, setEditedMarks, saveEditedStudent ,cancelEdit  }) {
    if(!editingId) {
        return null;
    }

    return (
        <div>
            <h2> Edit Student </h2>

            <input type="text" placeholder="Enter Student Roll No" value={editedRollNo} onChange={(e) => setEditedRollNo(e.target.value)} />

            <br />
            <br />

            <input type="text" placeholder="Enter Student Name" value={editedName} onChange={(e) => setEditedName(e.target.value)} />

            <br />
            <br />

            <input type="number" placeholder="Marks" value={editedMarks} onChange={(e) => setEditedMarks(e.target.value)} />

            <br />
            <br />

            <button onClick={saveEditedStudent}> Save Changes </button>
            <button onClick={cancelEdit}> Cancel </button>

            <hr />

        </div>
    );
}

export default EditStudent;