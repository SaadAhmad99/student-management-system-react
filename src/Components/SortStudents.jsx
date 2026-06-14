function SortStudents({ setSortType }) {
  return (
    <div>
        <h2>Sort Students</h2>
      <button
        onClick={() => setSortType("name")}
      >
        Sort By Name
      </button>

      <button
        onClick={() => setSortType("marks")}
      >
        Sort By Marks
      </button>

    </div>
  );
}

export default SortStudents;