import React from 'react'

const SearchBox = (props) => {

    const { setSearchTerm } = props;

    const updateValue = (e) => {
        console.log(props.searchTerm)
        setSearchTerm(e.target.value)
    }
    
  return (
    <input onChange={updateValue} type="search" ></input>
  )
}

export default SearchBox