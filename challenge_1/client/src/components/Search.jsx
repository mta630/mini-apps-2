import React, { useState, useEffect } from 'react';

const Search = (props) => {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    props.handleSubmit(query);
    document.getElementById('search-form').reset();
    setQuery('');
  }

    return (
      <>
      <form id="search-form">
        <input type='search' placeholder="Enter keywords here" onChange={e=>setQuery(e.target.value)}></input>
        <button type='submit' onClick={e=>{e.preventDefault();handleSubmit()}}>Submit</button>
      </form>
      </>
    )
}

export default Search;