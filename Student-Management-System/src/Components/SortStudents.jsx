function SortStudents({ setSortType }) {
  return (
    <div>

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

      <hr />

    </div>
  );
}

export default SortStudents;