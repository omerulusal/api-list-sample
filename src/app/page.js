"use client";
import { React, useState, useEffect } from 'react';
import "./style.scss";
import getApis from "./apis.json"
import Search from "@/components/search/search";
import ApiItem from "@/components/ApiItem/ApiItem";


const Home = () => {
  const [search, setSearch] = useState("")
  const [apis, setApis] = useState(getApis)
  const toggleBookmark = (id) => {
    setApis(
      apis.map(api => {
        if (api.id === id) {
          api.bookmark = !api.bookmark;
        }
        // jsondan gelen bookmark değeri true ise false, false ise de true yapar
        return api;
      })
    );
  }
  useEffect(() => {
    setApis(
      getApis.filter((api) =>
        api.name.toLowerCase().includes(search.toLowerCase())
        // jsondan gelen herbir veriyi search deki veriler ile karsilastirir
      )
    );
  }, [search]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h3>A collective list of free APIs for use in <br /> software and development</h3>
        <Search search={search} setSearch={setSearch} />
        <div className="container">
          <h3>Featured APIs of this week</h3>
          <div className="api-list">
            {apis.map((api) => (
              <ApiItem toggleBookmark={toggleBookmark} key={api.id} api={api} />
            ))}

          </div>
        </div>
        <div className="container">
          <h4>Your Bookmarks</h4>
          <div className="api-list">

            {apis.filter((api) => api.bookmark === true).map((api) => (
              <ApiItem toggleBookmark={toggleBookmark} key={api.id} api={api} />
            ))}
            {apis.filter(api => api.bookmark === true).length === 0 && (
              <h4 className='centerx'>There is no item on your bookmarks</h4>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
export default Home

// npm i node-sass ile sass eklentisini indirdim.