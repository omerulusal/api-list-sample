import React from 'react'
import "./apiItem.scss";
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import { RiArrowRightSLine } from 'react-icons/ri'
const index = ({ api, toggleBookmark }) => {
    return (
        <div className="api-item" key={api.id}>
            <div className="item-icon">
                <img src={api.icon} alt={`${api.name} icon`} />
            </div>
            <div className="item-detail">
                <h4>{api.name}</h4>
                <div className="item-category">{api.category}</div>
                <div className="item-description">{api.description}</div>
            </div>
            <div className="item-hover">
                <button onClick={() => toggleBookmark(api.id)}>
                    {api.bookmark ? <BsBookmarkFill /> : <BsBookmark />}
                    Bookmark
                </button>
                <a href="#">
                    API Docs
                    <RiArrowRightSLine />
                </a>
            </div>
        </div>
    )
}

export default index