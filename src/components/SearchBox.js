
const Searchbox = ({setQuery, search}) => {
    return (
        <div className="search-box">
            <input type="text"
                   className="search-bar"
                   placeholder="Search..."
                   onChange={e => setQuery(e.target.value)}
                   onKeyPress={search}
            />
        </div>
    );
}

export default Searchbox;