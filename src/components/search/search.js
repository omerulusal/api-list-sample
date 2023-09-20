"use client";
import React from 'react'
import "./search.scss"
import { GrSearch } from 'react-icons/gr'

const search = ({ search,setSearch }) => {
    return (
        <form className="api-search-form">
            <div className="icon">
                <GrSearch />
            </div>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Find development,images APIs" />
        </form>
    )
}

export default search