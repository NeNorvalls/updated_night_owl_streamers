import React, { useState } from 'react'

const Search = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const handleSearchInput = (e) => {
    const value = e.target.value
    setSearchQuery(value)

    // Generate alphabetical suggestions based on search query
    // Replace this code with your API request logic
    const apiUrl = `https://nf-api.onrender.com?search=${value}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const suggestions = data.results
        setSuggestions(suggestions.slice(0, 5)) // Limit suggestions to 5
      })
      .catch((error) => {
        console.error('Error fetching suggestions:', error)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(searchQuery)
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion)
    handleSearch(suggestion)
  }

  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        style={{ backgroundColor: 'white', color: 'black' }}
        value={searchQuery}
        onChange={handleSearchInput}
      />
      <button
        className="btn btn-primary primary-text"
        type="submit"
        style={{ backgroundColor: 'gold', color: 'black' }}
      >
        Search
      </button>
      {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggestion-item"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </form>
  )
}

export default Search
