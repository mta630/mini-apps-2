import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Search from './Search.jsx';
import Display from './Display.jsx'
import $ from 'jquery';

const App = () => {
  const [results, setResults] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(1);
  const [currentQuery, setCurrentQuery] = useState('');

  const handleSubmit = (query) => {
    setCurrentQuery(query);
    $.ajax({
      url: `/events?q=${query}`,
      dataType: 'json',
      type: 'GET',
      success: (data) => {
        setPageCount(Math.ceil(data.length / 10))
        $.ajax({
          url: `/events?q=${query}`,
          data: { _page: offset },
          dataType: 'json',
          type: 'GET',
          success: (data) => {
            setResults(data);
        }});
    }});
  }


  const handlePageClick = (data) => {
    let newOffset = data.selected;
    setOffset(newOffset)
    $.ajax({
      url: `/events?q=${currentQuery}`,
      data: { _page: offset },
      dataType: 'json',
      type: 'GET',
      success: (data) => {
        setResults(data);
    }});
  };

  return (
    <>
      <Search
        handleSubmit={handleSubmit.bind(this)}
      />
      <div className="results_container">
        <Display
          results={results}
        />
        <ReactPaginate className="paginate-format"
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={e=>handlePageClick(e)}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
      </div>
    </>
  )
}

export default App;