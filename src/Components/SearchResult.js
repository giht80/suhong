
import {useEffect} from 'react';
import '../css/SearchResult.css';
import queryString from 'query-string';

function SearchResult() {
    // componentDidMount - 클래스형
    useEffect(() => { // hook 방식
        console.log(window.location);
        console.log(window.location.href);
        // http://localhost:3001/search?query-hello&ie-utf8&sm=top_hty
        console.log(window.location.search);
        // ?query=hello&ie=utf8&sm=top_hty
        // query=hello&ie=utf8&sm=top_hty
        // query=hello, ie=utf8, sm=top_hty
        const queryObj = queryString.parse(window.location.search);
        console.log(queryObj);
    }, []);
    return (
        <div id="search-result">
            결과
        </div>
      )
}

export default SearchResult;