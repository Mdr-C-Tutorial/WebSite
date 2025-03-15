import './Search.css';
import { CiSearch } from "react-icons/ci";

function Search() {
    return (
        <div className="Search">
            <input type="text" id="search" placeholder={"Search something ..."} />
            <CiSearch onClick={() => {
                let param = document.getElementById('search').value;
                console.log(param);
                if (param != "") {
                    window.location.href = '/search/' + param;
                }
            }} className="Searchbutton" />
        </div>
    )
}

export default Search;