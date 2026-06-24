function SearchStudent({
    search,
    setSearch
})
{
    return (
        <input
            type="text"
            placeholder="Search Students..."
            value={search}
            onChange={(e) =>
                setSearch(e.target.value)
            }
        />
    );
}

export default SearchStudent;