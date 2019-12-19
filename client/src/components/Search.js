import React from 'react'

function Search({searchByName}){
    return(
         <input onChange={searchByName} type="text" placeholder="Search..."/>
    )
}

export default Search