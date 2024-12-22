import './Search.css';
import { CiSearch } from "react-icons/ci";

function Search() {
    return (
        <div className="Search">
            <input type="text" id="search" placeholder={"Search Something"} />
            <CiSearch onClick={() => {
                let param = document.getElementById('search').value;
                console.log(param);
                if (param != "") {
                    window.location.href = '/search/' + param;
                }
            }} className="Search-button" />
        </div>
    )
}

export default Search;