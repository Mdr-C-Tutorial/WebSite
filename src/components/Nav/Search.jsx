import './Search.css';
import { CiSearch } from "react-icons/ci";

function Search() {
    const handleSearch = () => {
        let param = document.getElementById('search').value;
        console.log(param);
        if (param != "") {
            window.location.href = '/search/' + param;
        }
    };

    return (
        <div className="Search">
            <input
                type="text"
                id="search"
                placeholder={"Search ..."}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />
            <CiSearch onClick={handleSearch} className="Searchbutton" />
        </div>
    )
}

export default Search;