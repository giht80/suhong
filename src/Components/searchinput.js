
import '../css/searchinput.css';
import { useState } from 'react';

function Searchinput() {
    const [query, setquery] = useState('')
    const searchMovie = () => {
        window.location.href=`/search?query=${query}&ie-utf8&sm=top_hty`;
        // http://localhost:3001/search?query-hello&ie-utf8&sm=top_hty
    }
    const inputChange = (e) => {
        console.log(e.target.value);
        setquery(e.target.value);
    }

    document.addEventListener('keyup', e => {
        if (e.key === 'Enter') {
            searchMovie();
        }
    })

    return (
        <div id="search-input">
            <input type="text" onChange={inputChange}/>
            <button onClick={searchMovie}>검색</button>
        </div>
    )
}

export default Searchinput;